import React, { Component, useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from '../AvatarEditor';
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {Loading} from '../LoadingComponent';




// function MyGuildProfile(props){
//     if(props.isLoading){
//         return(
//             <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <Loading />
//                 </div>
                
//             </div>
//         </div>
//         )
//     }
//     if(props.errMess){
//         return(
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         {props.errMess}
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     if (props.guild) {
//         return (
            
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <Breadcrumb>
//                             <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                             <BreadcrumbItem><Link to="/guilddirectory">Guild Directory</Link></BreadcrumbItem>
//                             <BreadcrumbItem active>{props.guild.name}</BreadcrumbItem>
//                         </Breadcrumb>
//                         {/* <h2>{props.campsite.name}</h2> */}
//                         <hr />
//                     </div>
//                 </div>
//                 <div className="row">
//                 {/* <MyUserProfile user={props.user}/> */}
//                 {/* <MyGuildProfileComponent guild={props.guild}/> */}
//                     {/* <RenderCampsite campsite={props.campsite} />
//                     <RenderComments
//                         comments={props.comments}
//                         // addComment={props.addComment}
//                         postComment={props.postComment} 
//                         campsiteId={props.campsite.id}
//                     /> */}
//                     {/* <p>{props.guild.guild.forEach(element => {
//                         console.log(element)
//                     })}</p>         */}
//                     <p>{props.match}what in tarnation</p>
//                 </div>
//             </div>
//         );
//     }
    
//     return (
//         {console.log()}
//         <p>I'm here though </p>
//         )

// }

// const MyGuildProfile = ({match}) => (<console.log( match) p>hi</p>)

// function MyGuildProfile(props){
//     console.log(props)
//     return(<p>Hi there</p>)
// }

function MyGuildProfile({guild}){
    // function getDetails(){
    //     return {_html: {user.description}}
    // }
    console.log("guild is", guild)
    return(
        <div class="container emp-profile">
                    <form method="post">
                    
                        <div class="row">
                            <div class="col-md-3">
                                   <div class="profile-img">
                                   <ChangeProfileImage guild={guild} />
                                    <img  className="userprofileimage" src={guild.avatar} alt={guild.name}  data-holder-rendered="true" />
                                    {/* <div class="file btn btn-lg btn-primary" onClick={this.toggleModal}> */}
                                </div>
                                
                                    
                            </div>

                            
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {guild.name}
                                    </h5>
                                    <h6>
                                        {guild.deck}
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title="Home">
                                            {guild.deck}
                                        </Tab>
                                        <Tab eventKey="profile" title="Profile">
                                            
                                            {guild.purpose}
                                        </Tab>
                                        <Tab eventKey="tasks" title="Tasks" >
                                            {guild.tasks}                                          
                                        </Tab>
                                        <Tab eventKey="contact" title="Contact" >
                                            <div dangerouslySetInnerHTML={{ __html: guild.description}}/>                                          
                                        </Tab>
                                    </Tabs>
                                    {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                            </div>
                        </div>
                 
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="">Website Link</a><br />
                                    <a href="">Bootsnipp Profile</a><br />
                                    <a href="">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="">Web Designer</a><br />
                                    <a href="">Web Developer</a><br />
                                    <a href="">WordPress</a><br />
                                    <a href="">WooCommerce</a><br />
                                    <a href="">PHP, .Net</a><br />
                                </div>
                            </div>
                            <div class="col-md-8">

                                {/* where meat of tabs was */}
                            </div>
                        </div>
                    </form>
                </div>

    )
}

class ChangeProfileImage extends Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            // isNavOpen: false,
            isModalOpen: false
        };  
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    changeBackground(e) {
        e.target.style.background = 'red';
      }
    render() {
        return (
            <React.Fragment>
                
                <Button  style={{float: "right"}} outline onClick={this.toggleModal} >
                    <i className="fa fa-pencil" /> 
                </Button>    
             
                        
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Avatar Editor</ModalHeader>
                    <ModalBody>
                
                        <MyEditor image={this.props.guild} />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}


export default MyGuildProfile;