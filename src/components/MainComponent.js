import React, { Component } from 'react';

import Home from './HomeComponent'
import MyGuilds from './MyGuildsComponent'
import Bio from './BioComponent'
import Header from './HeaderComponent'
import NavbarReactBootstrap from './NavbarComponent'
import UserProfile from './UserProfilePage';
import UserDirectory from './UserDirectoryComponent';
import MyUserProfile from './MyUserProfilePage';
import MessagingCenter from './MessagingCenter';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import {usersLoading, usersFailed, addUsers, addUser, postUser, fetchUsers} from '../redux/ActionCreators'

const mapDispatchToProps = {
    fetchUsers: () => (fetchUsers()),
    postUser: (userId, userName, userAvatar, avatarImage)  => (postUser(userId, userName, userAvatar, avatarImage)),
    addUser: (userId, userName, userAvatar, avatarImage) => (addUser(userId, userName, userAvatar, avatarImage)),
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
        users: state.users
        // comments: state.comments,
        // partners: state.partners,
        // promotions: state.promotions
    };
};



class Main extends Component{
   
       
    componentDidMount() {
        this.props.fetchUsers()     
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
                <MyUserProfile user={this.props.users.users.filter(user => user.id === +match.params.userId)[0]}/>
            )
        }

        const MessagingCenterPage = ({match}) => {
            return <MessagingCenter/>
        }

        return (
            <div>
                <Header />
                {/* <CpcNavigation  /> */}
                <NavbarReactBootstrap/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/bio' component={BioPage}/>
                    <Route path='/messagingcenter' component={MessagingCenterPage} />
                    <Route path='/myguilds' component={MyGuildsPage}/>
                    <Route path='/myprofile' component={MyUserProfPage} />
                    <Route path='/userdirectory/:userId' component={UserProfPageID} />
                    <Route path='/userdirectory' render={() => <UserDirectory users={this.props.users} />} />
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
    }
}

// export default Main;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));