import React, { Component } from 'react';

import Home from './Home/HomeComponent'
import MyGuilds from './Guild/MyGuildsComponent'
import GuildDirectory from './Guild/GuildDirectory'
import MyGuildProfile from './Guild/MyGuildProfile'


import NavbarReactBootstrap from './Navigation/NavbarComponent'
import UserProfile from './Users/UserProfilePage';
import UserDirectory from './Users/UserDirectoryComponent';

import MyUserProfile from './Users/MyUserProfilePage';
import MessagingCenter from './Messaging/MessagingCenter';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {fetchMyGuilds, fetchAllGuilds} from '../redux/Guilds/actions'
import {fetchUsers, fetchLoginUser, fetchSpecificyMessage, fetchChatContacts, fetchnoteToSelf} from '../redux/ActionCreators'

import GuildProfile from './Guild/GuildProfile'


const mapDispatchToProps = {
    fetchUsers: () => (fetchUsers()),
    fetchLoginUser: () => (fetchLoginUser()),
    fetchSpecificyMessage: (userid) => (fetchSpecificyMessage(userid)),
    fetchMyGuilds: () => (fetchMyGuilds()),
    fetchAllGuilds: () => (fetchAllGuilds()),
    fetchChatContacts: () => (fetchChatContacts()),
    fetchnoteToSelf: () => (fetchnoteToSelf())
    
};

const mapStateToProps = state => {
    return {
        users: state.users,
        loggedInUser: state.loggedInUser,
        specificMessages: state.specificMessages,
        myGuilds: state.myGuilds,
        allGuilds: state.allGuilds,
        chatcontacts: state.chatcontacts,
        noteToSelf: state.noteToSelf
        
    };
};



class Main extends Component{
          
    componentDidMount() {
        
        this.props.fetchUsers()
        this.props.fetchLoginUser()   
        this.props.fetchSpecificyMessage()
        this.props.fetchMyGuilds()
        this.props.fetchAllGuilds()
        this.props.fetchChatContacts()
        this.props.fetchnoteToSelf()
    }
   
    render(){
        
        const HomePage = () => {
            return (
                <Home/>
            )
        }
        const MyGuildProfPageID = ({ match }) => {
            return(
                // <MyGuildProfile guild={this.props.myGuilds.myGuilds.filter(guild => guild.id === +match.params.myGuildID)[0]}/>
                <MyGuildProfile guild={this.props.myGuilds.myGuilds.filter(guild => guild.id === +match.params.myGuildID)[0]}/>
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
               
                <NavbarReactBootstrap/>
                <Switch>
                    <Route exact path='/myguilds/:myGuildID'  component={MyGuildProfPageID}  />
                    <Route path='/myguilds' render ={() => <MyGuilds myGuilds={this.props.myGuilds}/> } />
                    <Route path='/home' component={HomePage}/>
                    <Route path='/messagingcenter' render ={() => < MessagingCenter  noteToSelf={this.props.noteToSelf} specificMessages={this.props.specificMessages} chatcontacts={this.props.chatcontacts} />}/> 
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