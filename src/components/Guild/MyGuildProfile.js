import React, { Component, useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from '../AvatarEditor';
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import {Loading} from '../LoadingComponent';


function MyGuildProfile({guild}){

    console.log("guild is", guild)
    return(
        <div class="container emp-profile">
                    <form method="post">
                    
                        <div class="row">
                            <div class="col-md-3">
                                   <div class="profile-img">
                                   <ChangeProfileImage guild={guild} />
                                    <img  className="userprofileimage" src={guild.avatar} alt={guild.name}  data-holder-rendered="true" />
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