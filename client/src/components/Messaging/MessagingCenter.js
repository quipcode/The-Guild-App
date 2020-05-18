import React from 'react'


import { Link } from 'react-router-dom';
import { DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem, } from 'reactstrap';

import {fetchSpecificyMessage} from '../../redux/ActionCreators'
import {connect} from 'react-redux'
import RenderContactProfileChat from './RenderContactProfileChat'




function ChatBox({props}){

    
    const mymesser = props.specificMessages.specificMessages.messages_4_loggedInUserId ? props.specificMessages.specificMessages.messages_4_loggedInUserId.map(message =>{
        return <GenerateChatAllLeftSide messages={message}/>
    }) : []
    const messangerDets = props.specificMessages.specificMessages
    const selfNotes = props.noteToSelf.noteToSelf
    const myNotes = props.noteToSelf.noteToSelf.messages_4_loggedInUserId ? props.noteToSelf.noteToSelf.messages_4_loggedInUserId.map(message =>{
        return <GenerateChatAllLeftSide messages={message}/>
    }) : []
    
    // render(){
        if(messangerDets.name == "Batman"){
            return(
                <React.Fragment>
              
    
                    <div className="container">
                        <div className="row justify-content-center h-100">
                            <div className=" col-md-5 col-xl-4 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search"/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                
                                    
                                    <RenderContactProfileChat users={props.chatcontacts.chatcontacts}/>
                                    
                                <div className="card-footer"></div>
                            </div></div>
    
                            <div className="col-md-7 col-xl-8 chat">
                                <div className="card">
                                <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        {/* <img src={left2[0].messangerAvatar} className="rounded-circle user_img"/> */}
                        <img src={messangerDets.avatar} className="rounded-circle user_img"/>
                        {/* <span className={`online_icon ${left2[0].status}`}></span> */}
                        <span className={`online_icon ${messangerDets.status}`}></span>
                    </div>
                    <div className="user_info">
                        
                    <span>Note to Self</span>
                        {/* {mymesser} */}
                        {/* <span>Chat with {left2[0].name}</span> */}
                        {/* <p>{left2.length} Messages</p> */}
                    </div>
                    <div className="video_cam">
                        {/* <span><i className="fad fa-video"></i></span> */}
                        <span><i className="fa fa-video-camera"></i></span>
                        <span><i className="fa fa-phone"></i></span>
                    </div>
                </div>
                
            
                <UncontrolledDropdown id="action_menu_btn">
                    <DropdownToggle>
                        <i className="fa fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className="action_menu">
    
                        <DropdownItem><i className="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link></DropdownItem>
                        <DropdownItem><i className="fa fa-users"></i> Add to close friends</DropdownItem>
                        <DropdownItem><i className="fa fa-plus"></i> Add to group</DropdownItem>
                        <DropdownItem><i className="fa fa-ban"></i> Block</DropdownItem>
                        {/* <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem> */}
                    </DropdownMenu>
                </UncontrolledDropdown>        
            </div>
                                <div className="card-body msg_card_body">
        
                                    {mymesser}
    
                                  
    
                                    
                                    </div>
    
                                    <div className="card-footer">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <span className="input-group-text attach_btn"><i className="fa fa-paperclip"></i></span>
                                            </div>
                                            <textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
                                            <div className="input-group-append">
                                                <span className="input-group-text send_btn"><i className="fa fa-location-arrow"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </React.Fragment>
            )
        }else if(messangerDets.length == '0' && selfNotes.id == 'bman'){
            
            return(
                <React.Fragment>
              
    
                    <div className="container">
                        <div className="row justify-content-center h-100">
                            <div className=" col-md-5 col-xl-4 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search"/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                
                                    
                                    <RenderContactProfileChat users={props.chatcontacts.chatcontacts}/>
                                    
                                <div className="card-footer"></div>
                            </div></div>
    
                            <div className="col-md-7 col-xl-8 chat">
                                <div className="card">
                                <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        {/* <img src={left2[0].messangerAvatar} className="rounded-circle user_img"/> */}
                        <img src={selfNotes.avatar} className="rounded-circle user_img"/>
                        {/* <span className={`online_icon ${left2[0].status}`}></span> */}
                        <span className={`online_icon ${selfNotes.status}`}></span>
                    </div>
                    <div className="user_info">
                    <span>Note to Self</span>
                    {/* <span>Find som</span> */}
                        {/* {mymesser} */}
                        {/* <span>Chat with {left2[0].name}</span> */}
                        {/* <p>{left2.length} Messages</p> */}
                    </div>
                    <div className="video_cam">
                        {/* <span><i className="fad fa-video"></i></span> */}
                        <span><i className="fa fa-video-camera"></i></span>
                        <span><i className="fa fa-phone"></i></span>
                    </div>
                </div>
                
            
                <UncontrolledDropdown id="action_menu_btn">
                    <DropdownToggle>
                        <i className="fa fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className="action_menu">
    
                        <DropdownItem><i className="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link></DropdownItem>
                        <DropdownItem><i className="fa fa-users"></i> Add to close friends</DropdownItem>
                        <DropdownItem><i className="fa fa-plus"></i> Add to group</DropdownItem>
                        <DropdownItem><i className="fa fa-ban"></i> Block</DropdownItem>
                        {/* <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem> */}
                    </DropdownMenu>
                </UncontrolledDropdown>        
            </div>
                                <div className="card-body msg_card_body">
        
                                    {myNotes}
    
                                  
    
                                    
                                    </div>
    
                                    <div className="card-footer">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <span className="input-group-text attach_btn"><i className="fa fa-paperclip"></i></span>
                                            </div>
                                            <textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
                                            <div className="input-group-append">
                                                <span className="input-group-text send_btn"><i className="fa fa-location-arrow"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        
        else{
            return(
                <React.Fragment>
              
    
                    <div className="container">
                        <div className="row justify-content-center h-100">
                            <div className=" col-md-5 col-xl-4 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search"/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                
                                    
                                    <RenderContactProfileChat users={props.chatcontacts.chatcontacts}/>
                                    
                                <div className="card-footer"></div>
                            </div></div>
    
                            <div className="col-md-7 col-xl-8 chat">
                                <div className="card">
                                <div className="card-header msg_head">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        {/* <img src={left2[0].messangerAvatar} className="rounded-circle user_img"/> */}
                        <img src={messangerDets.avatar} className="rounded-circle user_img"/>
                        {/* <span className={`online_icon ${left2[0].status}`}></span> */}
                        <span className={`online_icon ${messangerDets.status}`}></span>
                    </div>
                    <div className="user_info">
                        
                    <span>Chat with {messangerDets.name}</span>
                        {/* {mymesser} */}
                        {/* <span>Chat with {left2[0].name}</span> */}
                        {/* <p>{left2.length} Messages</p> */}
                    </div>
                    <div className="video_cam">
                        {/* <span><i className="fad fa-video"></i></span> */}
                        <span><i className="fa fa-video-camera"></i></span>
                        <span><i className="fa fa-phone"></i></span>
                    </div>
                </div>
                
            
                <UncontrolledDropdown id="action_menu_btn">
                    <DropdownToggle>
                        <i className="fa fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className="action_menu">
    
                        <DropdownItem><i className="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link></DropdownItem>
                        <DropdownItem><i className="fa fa-users"></i> Add to close friends</DropdownItem>
                        <DropdownItem><i className="fa fa-plus"></i> Add to group</DropdownItem>
                        <DropdownItem><i className="fa fa-ban"></i> Block</DropdownItem>
                        {/* <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem> */}
                    </DropdownMenu>
                </UncontrolledDropdown>        
            </div>
                                <div className="card-body msg_card_body">
        
                                    {mymesser}
    
                                  
    
                                    
                                    </div>
    
                                    <div className="card-footer">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <span className="input-group-text attach_btn"><i className="fa fa-paperclip"></i></span>
                                            </div>
                                            <textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
                                            <div className="input-group-append">
                                                <span className="input-group-text send_btn"><i className="fa fa-location-arrow"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        
    // }
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
        <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">        
                {e.messagecontent}        
                <span className="msg_time_send">{e.messagetimestamp}</span>
            </div>
            <div className="img_cont_msg">
                <img src={e.messangerAvatar} className="rounded-circle user_img_msg"/>
            </div>
        </div>))
    left2.forEach(e => finallizedLeft.push(
            <div className="d-flex justify-content-start mb-4">
                <div className="img_cont_msg">
                    <img src={e.messangerAvatar} className="rounded-circle user_img_msg"/>
                </div>
                <div className="msg_cotainer">
                {e.messagecontent}
                    <span className="msg_time">{e.messagetimestamp}</span>
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
            <div className="col" className="emp-profile">
                <h2 className="centered-header">Messaging Center</h2>
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