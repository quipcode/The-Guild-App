import React, { Component } from 'react';

import Home from './HomeComponent'
import MyGuilds from './MyGuildsComponent'
import Bio from './BioComponent'
import Header from './HeaderComponent'
import NavbarReactBootstrap from './NavbarComponent'
import UserProfile from './UserProfilePage';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import {usersLoading, usersFailed, addUsers, addUser, postUser, fetchUsers} from '../redux/ActionCreators'

const mapDispatchToProps = {
    // postUser = (userId, userName, userAvatar, avatarImage) 
    postUser: (userId, userName, userAvatar, avatarImage)  => (postUser(userId, userName, userAvatar, avatarImage)),
    addUser: (userId, userName, userAvatar, avatarImage) => (addUser(userId, userName, userAvatar, avatarImage)),
    // addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    // fetchUsers: () => (fetchUsers()),
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
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         // campsites: CAMPSITES
           
    //     }
    // }
    componentDidMount() {
        // this.props.fetchUsers();
        // this.props.fetchComments();
        // this.props.fetchPromotions();
        // this.props.fetchPartners();
    }
   
    render(){
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
                <UserProfile user={this.props.users.filter(user => user.id === +match.params.userID)[0]}/>
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
                    <Route path='/myguilds' component={MyGuildsPage}/>
                    <Route path='/myprofile' component={UserProfPageID} />
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
    }
}

// export default Main;
export default withRouter(connect(mapStateToProps)(Main));