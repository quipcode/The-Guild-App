import React, { Component } from 'react';

import Home from './HomeComponent'
import MyGuilds from './Guild/MyGuildsComponent'
import GuildDirectory from './Guild/GuildDirectory'
import MyGuildProfile from './Guild/MyGuildProfile'

import Header from './HeaderComponent'
import NavbarReactBootstrap from './NavbarComponent'
import UserProfile from './UserProfilePage';
import UserDirectory from './UserDirectoryComponent';

import MyUserProfile from './MyUserProfilePage';
import MessagingCenter from './Messaging/MessagingCenter';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {fetchMyGuilds, fetchAllGuilds} from '../redux/Guilds/actions'
import {fetchUsers, fetchLoginUser, fetchMessages, fetchSpecificyMessage} from '../redux/ActionCreators'

import GuildProfile from './Guild/GuildProfile'

const mapDispatchToProps = {
    fetchUsers: () => (fetchUsers()),
    fetchLoginUser: () => (fetchLoginUser()),
    fetchMessages: () => (fetchMessages()),
    fetchSpecificyMessage: (userid) => (fetchSpecificyMessage(userid)),
    fetchMyGuilds: () => (fetchMyGuilds()),
    fetchAllGuilds: () => (fetchAllGuilds())
    
};

const mapStateToProps = state => {
    return {
        users: state.users,
        loggedInUser: state.loggedInUser,
        messages: state.messages,
        specificMessages: state.specificMessages,
        myGuilds: state.myGuilds,
        allGuilds: state.allGuilds
        
    };
};



class Main extends Component{
   
       
    componentDidMount() {
        
        this.props.fetchUsers()
        this.props.fetchLoginUser()   
        this.props.fetchMessages()  
        this.props.fetchSpecificyMessage()
        this.props.fetchMyGuilds()
        this.props.fetchAllGuilds()
    }
   
    render(){
        
        const HomePage = () => {
            return (
                <Home/>
            )
        }
        const MyGuildProfPageID = ({ match }) => {
            return(
                
                <MyGuildProfile guild={this.props.myGuilds.myGuilds.filter(g => g.id === +match.params.myGuildID)[0]}/>
                
            )
        }
      

       
        const UserProfPageID = ({ match }) => {
            return(
                
                <UserProfile user={this.props.users.users.filter(user => user.id === +match.params.userId)[0]}/>
            )
        }

     
        const GuildProfPageID = ({ match }) => {
            return(
                
                <GuildProfile guild={this.props.allGuilds.allGuilds.filter(guild => guild.id === +match.params.guildId)[0]}/>
            )
        }
        

        

        return (
            <div>
                <Header />
                
                <NavbarReactBootstrap/>
                <Switch>
                    

                    <Route exact path='/myguilds/:myGuildID'  component={MyGuildProfPageID}  />
                    {/* <Route exact path="/details/:id" render={(props) => <DetailsPage globalStore={globalStore} {...props} /> } /> */}
                    {/* <Route exact path="/myguilds/:myGUID" render={(props) => <MyGuildProfile guild={props.myGuilds} {...props} /> } /> */}
                    <Route path='/myguilds' render ={() => <MyGuilds myGuilds={this.props.myGuilds}/> } />

                    <Route path='/home' component={HomePage}/>
                    
                    <Route path='/messagingcenter' render ={() => < MessagingCenter  specificMessages={this.props.specificMessages} />}/> 
                    
                    
                    
                    
                    <Route path='/myprofile' render={() => <MyUserProfile loggedInUser={this.props.loggedInUser}/>} />
                    

                    <Route path='/userdirectory/:userId' component={UserProfPageID} />
                    <Route path='/userdirectory' render={() => <UserDirectory  users={this.props.users}/>} />
                    
                    <Route path='/guilddirectory/:guildId' component={GuildProfPageID} />
                    <Route path='/guilddirectory' render={() => <GuildDirectory  allGuilds={this.props.allGuilds}/>} />

                    

                    <Route path='/guildprofile' render={() => <MyGuildProfile />}  />
                    
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));