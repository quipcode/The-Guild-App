import React, { Component, useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from '../Features/AvatarEditor';
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {Loading} from '../Utilities/LoadingComponent';


function MyGuildProfile(props){

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

    if (props.guild) {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/myguilds"> My Guilds</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.guild.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <hr />
                    </div>
                </div>
                <div className="row">
                <MyGuildProfileComponent guild={props.guild}/>
                
                </div>
                
            </div>
            
        );
    }
    
    return  <div />;
    
}


function MyGuildProfileComponent({guild}){

    return(
        <div className="container emp-profile">
                    <form method="post">
                    
                        <div className="row">
                            <div className="col-md-3">
                                   <div className="profile-img">
                                   <ChangeProfileImage guild={guild} />
                                    <img  className="userprofileimage" src={guild.avatar} alt={guild.name}  data-holder-rendered="true" />
                                </div>  
                            </div>

                            
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {guild.name}
                                    </h5>
                                    <h6>
                                        {guild.deck}
                                    </h6>

                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title="Home">
                                        <p className="card-text">Founded on {guild.foundedOn}, with a member size of {guild.membersCount}, and impacts the world at a {guild.impact} level</p>
                                            {/* {guild.deck} */}
                                        </Tab>
                                        <Tab eventKey="profile" title="Profile">
                                            
                                            {guild.purpose}
                                        </Tab>
                                        
                                        <Tab eventKey="contact" title="Bio" >
                                            <div dangerouslySetInnerHTML={{ __html: guild.description}}/>                                          
                                        </Tab>
                                    </Tabs>
                                </div>
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