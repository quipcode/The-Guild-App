import React, { Component, useState } from 'react'


import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Dropdown, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { LoggedInUser } from '../../redux/loggedUser';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {loadMessageForUser} from '../../redux/ActionCreators'
import {fetchSpecificyMessage, fetchSpecificMessageWithSam} from '../../redux/ActionCreators'
import {connect} from 'react-redux'
import RenderContactProfileChat from './RenderContactProfileChat'




function ChatBox({props}){

    const mymesser = props.specificMessages.specificMessages.messages_4_loggedInUserId ? props.specificMessages.specificMessages.messages_4_loggedInUserId.map(message =>{
        return <GenerateChatAllLeftSide messages={message}/>
    }) : []
    console.log("mymesser is ", props.chatcontacts.chatcontacts)

    // render(){
        return(
            <React.Fragment>
          

                <div className="container">
                    <div class="row justify-content-center h-100">
                        <div class=" col-md-5 col-xl-4 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                            <div class="card-header">
                                <div class="input-group">
                                    <input type="text" placeholder="Search..." name="" class="form-control search"/>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text search_btn"><i class="fa fa-search"></i></span>
                                    </div>
                                </div>
                            </div>
                            
                                
                                <RenderContactProfileChat users={props.chatcontacts.chatcontacts}/>
                                
                            <div class="card-footer"></div>
                        </div></div>

                        <div class="col-md-7 col-xl-8 chat">
                            <div class="card">
                            <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
                <div class="img_cont">
                    {/* <img src={left2[0].messangerAvatar} class="rounded-circle user_img"/> */}
                    <img src="https://comicvine1.cbsistatic.com/uploads/scale_medium/10/103530/6444044-4130984370-aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yMjcvMjY2L29yaWdpbmFsL0pMXzFfdmFyX01hcmtfQnJvb2tzX2IuanBn" class="rounded-circle user_img"/>
                    {/* <span class={`online_icon ${left2[0].status}`}></span> */}
                    <span class={`online_icon online`}></span>
                </div>
                <div class="user_info">
                    <span>Chat with Wonder Woman</span>
                    {/* <span>Chat with {left2[0].name}</span> */}
                    {/* <p>{left2.length} Messages</p> */}
                </div>
                <div class="video_cam">
                    {/* <span><i class="fad fa-video"></i></span> */}
                    <span><i class="fa fa-video-camera"></i></span>
                    <span><i class="fa fa-phone"></i></span>
                </div>
            </div>
            
        
            <UncontrolledDropdown id="action_menu_btn">
                <DropdownToggle>
                    <i class="fa fa-ellipsis-v"></i>
                </DropdownToggle>
                <DropdownMenu class="action_menu">

                    <DropdownItem><i class="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link></DropdownItem>
                    <DropdownItem><i class="fa fa-users"></i> Add to close friends</DropdownItem>
                    <DropdownItem><i class="fa fa-plus"></i> Add to group</DropdownItem>
                    <DropdownItem><i class="fa fa-ban"></i> Block</DropdownItem>
                    {/* <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem> */}
                </DropdownMenu>
            </UncontrolledDropdown>        
        </div>
                            <div class="card-body msg_card_body">
    
                                {mymesser}

                              

                                
                                </div>

                                <div class="card-footer">
                                    <div class="input-group">
                                        <div class="input-group-append">
                                            <span class="input-group-text attach_btn"><i class="fa fa-paperclip"></i></span>
                                        </div>
                                        <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                                        <div class="input-group-append">
                                            <span class="input-group-text send_btn"><i class="fa fa-location-arrow"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    // }
}



function RenderChatMessageComponent({user}){
    return(
        <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
                <div class="img_cont">
                    <img src={user.avatar} class="rounded-circle user_img"/>
                    <span class={`online_icon ${user.status}`}></span>
                </div>
                <div class="user_info">
                    <span>Chat with {user.name}</span>
                    <p>{user.messages.length} Messages</p>
                </div>
                <div class="video_cam">
                    
                    <span><i class="fa fa-video-camera"></i></span>
                    <span><i class="fa fa-phone"></i></span>
                </div>
            </div>
            
        
            <UncontrolledDropdown id="action_menu_btn">
                <DropdownToggle>
                    <i class="fa fa-ellipsis-v"></i>
                </DropdownToggle>
                <DropdownMenu class="action_menu">

                    <DropdownItem><i class="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link></DropdownItem>
                    <DropdownItem><i class="fa fa-users"></i> Add to close friends</DropdownItem>
                    <DropdownItem><i class="fa fa-plus"></i> Add to group</DropdownItem>
                    <DropdownItem><i class="fa fa-ban"></i> Block</DropdownItem>
            
                </DropdownMenu>
            </UncontrolledDropdown>        
        </div>
        

    )
  
}

function GenerateChatAllLeftSide({messages}){
 
    let left = []
    let right = []
    let ans = []
    // messages.userIDReceiver.forEach(e => left.push(e.messagecontent))
    messages.userIDReceiver.forEach( e => ans.push(e.messagecontent))
    let right2 = messages.userIDReceiver.filter(e => e.messageby == "bman")
    let left2 = messages.userIDReceiver.filter(e => e.messageby != "bman")
    let finallizedRight = []
    let finallizedLeft = []
    right2.forEach(e => finallizedRight.push(
        <div class="d-flex justify-content-end mb-4">
            <div class="msg_cotainer_send">        
                {e.messagecontent}        
                <span class="msg_time_send">{e.messagetimestamp}</span>
            </div>
            <div class="img_cont_msg">
                <img src={e.messangerAvatar} class="rounded-circle user_img_msg"/>
            </div>
        </div>))
    left2.forEach(e => finallizedLeft.push(
            <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                    <img src={e.messangerAvatar} class="rounded-circle user_img_msg"/>
                </div>
                <div class="msg_cotainer">
                {e.messagecontent}
                    <span class="msg_time">{e.messagetimestamp}</span>
                </div>
            </div>))
    
    return(
          
        <React.Fragment>
           
            {finallizedLeft[0]}
            {finallizedRight[0]}
            
        </React.Fragment>
    
            // <p>tongue</p>
        );
}



function GenerateChatContentLeftAndRightHistory({messages, loggedInUser}){
    let allMessages = []
    for(var i = 0; i < messages.length; i++){
        if(messages.messageBy == loggedInUser.id){
            allMessages.push(
            <div class="d-flex justify-content-end mb-4">
                <div class="msg_cotainer_send">
                    {messages[i].messageContent}
                    <span class="msg_time_send">{messages[i].messagetimestamp}</span>
                </div>
                <div class="img_cont_msg">
                    <img src={messages[i].messangerAvatar} class="rounded-circle user_img_msg"/>
                </div>
            </div>
        )
        }
    }

}

function useForceUpdate(user){
    const [value, setValue] = useState(null); // integer state
    fetchSpecificyMessage(user)
    return () => setValue(value => user); // update the state to force render
}


function MessagingCenter(props){
        return(
            
            <React.Fragment>
       
                <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Messaging Center</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <hr />
                </div>
            </div>
            <div className="col" class="emp-profile">
                <h2 class="centered-header">Messaging Center</h2>
                <div className="row">
                
                </div>
            </div>
                </div>
                <ChatBox props={ props}/>
            </React.Fragment>
        )
}

const mapStateToProps = ({ specificMessages}) => ({
    specificMessages,
  });

  const mapDispatchToProps = dispatch => ({
    setMessage(id){
        return () => {
            dispatch(fetchSpecificyMessage(id))
            
        }
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MessagingCenter) ;