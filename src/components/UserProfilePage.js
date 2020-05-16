import React, { Component, useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from './AvatarEditor';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AvatarEditor from 'react-avatar-editor';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



function UserProfile(props){
    if(props.isLoading){
        return(
            <div className="container">
            <div className="row">
                <div className="col">
                    <Loading />
                </div>
                
            </div>
        </div>
        )
    }
    if(props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        {props.errMess}
                    </div>
                </div>
            </div>
        )
    }

    if (props.user) {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/userdirectory">User Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.user.name}</BreadcrumbItem>
                        </Breadcrumb>
                        {/* <h2>{props.campsite.name}</h2> */}
                        <hr />
                    </div>
                </div>
                <div className="row">
                {/* <MyUserProfile user={props.user}/> */}
                <UserProfileComponent user={props.user}/>
                    {/* <RenderCampsite campsite={props.campsite} />
                    <RenderComments
                        comments={props.comments}
                        // addComment={props.addComment}
                        postComment={props.postComment} 
                        campsiteId={props.campsite.id}
                    /> */}
                </div>
            </div>
        );
    }
    return <div />;

}

function UserProfileComponent({user}){
    // function getDetails(){
    //     return {_html: {user.description}}
    // }
    return(
        <div class="container emp-profile">
                    <form method="post">
                    
                        <div class="row">
                            <div class="col-md-3">
                                   <div class="profile-img">
                                   <ChangeProfileImage user={user} />
                                    <img  className="userprofileimage" src={user.image.small_url} alt={user.name}  data-holder-rendered="true" />
                                    {/* <div class="file btn btn-lg btn-primary" onClick={this.toggleModal}> */}
                                </div>
                                
                                    
                            </div>

                            
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {user.name}
                                    </h5>
                                    <h6>
                                        {user.deck}
                                    </h6>
                                    <p class="proile-rating">ALIASES: <span>{user.aliases}</span></p>
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title="Home">
                                            {user.deck}
                                        </Tab>
                                        <Tab eventKey="profile" title="Profile">
                                            
                                            {user.aliases}
                                        </Tab>
                                        <Tab eventKey="contact" title="Bio" >
                                            <div dangerouslySetInnerHTML={{ __html: user.description}}/>                                          
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
                            {/* <div class="col-md-2">
                                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                            </div> */}
                        </div>
                 
                        {/* <div class="row">
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

                                
                            </div>
                        </div> */}
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
                        {/* <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                        </Label>
                            </FormGroup>
                            <Button type="Submit" value="submit" color="primary">Login</Button>
                            <Button  value="submit" color="secondary" onClick = {this.toggleModal}>Cancel</Button>
                        </Form> */}
                        <MyEditor image={this.props.user} />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}


export default UserProfile;