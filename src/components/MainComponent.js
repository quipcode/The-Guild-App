import React, { Component } from 'react';

import Home from './HomeComponent'
import MyGuilds from './Guild/MyGuildsComponent'
import GuildDirectory from './Guild/GuildDirectory'
import MyGuildProfile from './Guild/MyGuildProfile'
import Bio from './BioComponent'
import Header from './HeaderComponent'
import NavbarReactBootstrap from './NavbarComponent'
import UserProfile from './UserProfilePage';
import UserDirectory from './UserDirectoryComponent';
import Directory from './UserDirectoryComponent'
import MyUserProfile from './MyUserProfilePage';
import MessagingCenter from './Messaging/MessagingCenter';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {fetchMyGuilds, fetchAllGuilds} from '../redux/Guilds/actions'
import {usersLoading, usersFailed, addUsers, addUser, postUser, fetchUsers, fetchLoginUser, fetchMessages, loadMessageForUser, fetchSpecificyMessage} from '../redux/ActionCreators'

import GuildProfile from './Guild/GuildProfile'
const bob = "bob"
const mapDispatchToProps = {
    fetchUsers: () => (fetchUsers()),
    // postUser: (userId, userName, userAvatar, avatarImage)  => (postUser(userId, userName, userAvatar, avatarImage)),
    // addUser: (userId, userName, userAvatar, avatarImage) => (addUser(userId, userName, userAvatar, avatarImage)),
    fetchLoginUser: () => (fetchLoginUser()),
    fetchMessages: () => (fetchMessages()),
    // loadMessageForUser: (bob) => (loadMessageForUser("bob")),
    fetchSpecificyMessage: (userid) => (fetchSpecificyMessage(userid)),
    fetchMyGuilds: () => (fetchMyGuilds()),
    fetchAllGuilds: () => (fetchAllGuilds())
    // addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    // postUser = (userId, userName, userAvatar, avatarImage) 
    // resetFeedbackForm: () => (actions.reset('feedbackForm')),
    // fetchComments: () => (fetchComments()),
    // fetchPromotions: () => (fetchPromotions()),
    // fetchPartners: () => (fetchPartners()),
    // postFeedback: () => (postFeedback())
};

const mapStateToProps = state => {
    return {
        users: state.users,
        // loggedInUser: "hello",
        loggedInUser: state.loggedInUser,
        messages: state.messages,
        specificMessages: state.specificMessages,
        getMyMessagesForUser: 'bman',
        myGuilds: state.myGuilds,
        allGuilds: state.allGuilds
        // comments: state.comments,
        // partners: state.partners,
        // promotions: state.promotions
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
        console.log(this.props)
        console.log(this.state)
        const HomePage = () => {
            return (
                <Home/>
            )
        }

        const MyGuildsPage = () =>{
            return(
                <MyGuilds/>
            )
        }

        const BioPage = () =>{
            return (
                <Bio/>
            )
        }
        const UserProfPageID = ({ match }) => {
            return(
                // <UserProfile/>
                <UserProfile user={this.props.users.users.filter(user => user.id === +match.params.userId)[0]}/>
            )
        }

        const MyUserProfPage = ({match}) => {
            return(
                <MyUserProfile />
            )
        }

        const MessagingCenterPage = ({match}) => {
            return <MessagingCenter/>
        }
        const GuildProfPageID = ({ match }) => {
            return(
                // <UserProfile/>
                <GuildProfile guild={this.props.allGuilds.allGuilds.filter(guild => guild.id === +match.params.guildId)[0]}/>
            )
        }
        const MyGuildProfPageID = ({ match }) => {
            return(
                // <UserProfile/>
                <MyGuildProfile guild={this.props.myGuilds.myGuilds.filter(guild => guild.id === +match.params.myguildId)[0]}/>
            )
        }
        return (
            <div>
                <Header />
                {/* <CpcNavigation  /> */}
                <NavbarReactBootstrap/>
                <Switch>
                    
                    <Route path='/home' component={HomePage}/>
                    <Route path='/bio' component={BioPage}/>
                    <Route path='/messagingcenter' render ={() => < MessagingCenter  specificMessages={this.props.specificMessages} />}/> 
                    <Route path='/myguilds/:myguildId' render ={({match}) => < MyGuildProfile  guild={this.props.myGuilds.myGuilds.filter(guild => guild.id === +match.params.myguildId)[0]} />}  />
                    <Route path='/myguilds' render ={() => <MyGuilds myGuilds={this.props.myGuilds}/> } />
                    {/* <Route path='/myprofile' component={MyUserProfPage} /> */}
                    <Route path='/myprofile' render={() => <MyUserProfile loggedInUser={this.props.loggedInUser}/>} />
                    <Route path='/userdirectory/:userId' component={UserProfPageID} />
                    <Route path='/guilddirectory/:guildId' component={GuildProfPageID} />
                    {/* <Route path='/userdirectory' render={() => <UserDirectory users={this.props.users} />} /> */}
                    <Route path='/userdirectory' render={() => <Directory  users={this.props.users}/>} />
                    <Route path='/guilddirectory' render={() => <GuildDirectory  allGuilds={this.props.allGuilds}/>} />

                    

                    <Route path='/guildprofile' render={() => <MyGuildProfile />}  />
                    
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
    }
}

// export default Main;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));