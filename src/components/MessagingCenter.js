import React, { Component, useState } from 'react'

// import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Dropdown, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { LoggedInUser } from '../redux/loggedUser';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {loadMessageForUser} from '../redux/ActionCreators'
import {fetchSpecificyMessage} from '../redux/ActionCreators'

const chatContacts = [{id: 0, id2:"bman", name:"Batman", fullName: "Bruce Wayne", status: "online", avatar:"https://comicvine1.cbsistatic.com/uploads/scale_medium/11125/111253436/6733777-4.jpg", testText: "Bruce Bruce's test", messages: [1,2,3]},
    {id: 1, name: "CatWoman", fullName: "Selina Kyle", status:"online", avatar:"https://comicvine1.cbsistatic.com/uploads/scale_medium/11125/111253436/6784476-catwoman_vol_5_1_textless_variant.jpg", testText: "Selina's test", messages: [1,2,3,4,5,6,7]}, 
    {id: 2, name: "Harley Quin", fullName: "Harleen Frances Quinzel", status: "offline", avatar: "https://comicvine1.cbsistatic.com/uploads/scale_medium/11118/111185556/5296059-harley%20quinn%20by%20stanley%20lau.jpg", testText: "Harley's test", messages: [1,2]}, 
    
    {id:3, id2: 'sman', name:"Superman", fullName: "Clark Kent", status:"away", avatar:"https://comicvine1.cbsistatic.com/uploads/scale_medium/11/117229/6777461-ce00l1hcatb21.jpg", testText:"Sup's Test", messages: [1]},

    {id:3, id2:'wwoman', name:"Wonder Woman", fullName: "Diana Prince", status:"online", avatar:"https://comicvine1.cbsistatic.com/uploads/scale_medium/10/103530/6444044-4130984370-aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yMjcvMjY2L29yaWdpbmFsL0pMXzFfdmFyX01hcmtfQnJvb2tzX2IuanBn", testText:"Diana's Test", messages: [1]},

    {id:3, name:"The Flash", fullName: "Barry Allen", status:"offline", avatar:"https://comicvine1.cbsistatic.com/uploads/scale_medium/10/100647/6772221-gplus1141127786.jpg", testText:"Barry's Test", messages: [1]},
]

// class TestingButtonContent extends Component

function TestingButtonContent({props}){
    // constructor(props){
    //     super(props);

    //     this.onItemClick = this.onItemClick.bind(this)
    //     // this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
    //     // this.handleChangeEvent = this.handleChangeEvent.bind(this);
    //     this.clickOnUser = this.clickOnUser.bind(this);
        

    //     this.state = {
    //         chatContent: "hello there",
    //         headerContent: "What up though",
    //         messageContent: "Lorem ipsum",
    //         isDialogOpen: false
    //     }
    // }

    // button1 = () => {
    //     this.setState({
    //         chatContent: "button 1 was clicked"
    //     })
    // }

    // button2 = () => {
    //     this.setState({
    //         chatContent: "button 2 was clicked"
    //     })
    // }

    // onItemClick = () => {
    //     this.setState({
    //         headerContent: "not much you"
    //     })
    // }

    // onItemClick2 = () => {
    //     this.setState({
    //         headerContent: "gg"
    //     })
    // }

    // clickOnUser = () =>{
    //     // this.setState({
    //     //     isDialogOpen: true
            
    //     // })
    //     window.alert("hello")
    // }

    // const myMessages  = props.specificMessages.specificMessages.test[0].map(messages => {
    //     return <GenerateChatAllLeftSide messages={messages}/>
    // })
    // const mymesser = props.specificMessages.specificMessages.test.map(message =>{
    //     return <GenerateChatAllLeftSide messages={message}/>
    // })

    const mymesser = props.specificMessages.specificMessages.messages_4_loggedInUserId ? props.specificMessages.specificMessages.messages_4_loggedInUserId.map(message =>{
        return <GenerateChatAllLeftSide messages={message}/>
    }) : []

    // render(){
        return(
            <React.Fragment>
                {/* <Button onClick={this.button1}>Button 1</Button>
                <Button onClick={this.button2}>Button 2</Button>
                <button onClick={this.onItemClick}></button>
                <h4 onClick={this.onItemClick}>head button 1</h4>
                <h4 onClick={this.onItemClick2}>head button 2</h4>
                <h2>{this.state.headerContent}</h2>
                <div style={{"overflow-y": "auto",  "width": "500px"}}>
                    <h1>{this.state.chatContent}</h1>
                </div> */}

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
                            
                                {/* <RenderContactProfileChat users={chatContacts} onClick={this.clickOnUser} data={this.state.messageContent}/> */}
                                <RenderContactProfileChat users={chatContacts}/>
                                
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
                                {/* <h3>{this.state.messageContent}</h3> */}
                                {/* {this.state.isDialogOpen ? (<p>why is this so hard</p>) : null} */}
                                {/* <p>why now {this.props.specificMessages.specificMessages}</p> */}
                                {/* <p>{props.id} +  {props.messages_4_loggedInUserId.[0].userIDReceiver[0].messagecontent}</p> */}
                                {/* <p> {props.id}</p>
                                <p onClick={() => console.log(props.specificMessages.specificMessages.messages_4_loggedInUserId[0])}>Hi there</p> */}
                                {/* <GenerateChatAllLeftSide/> */}
                                {mymesser}

                              

                                
                                 
                                {/* <p>{props.specificMessages.id} said:  {props.specificMessages.test} </p> */}
                                {/* {props.specificMessages.messages_4_loggedInUserId[0].userIDReceiver1[0].messagecontent} */}
                                {/* <p>what is in props {props.messages_4_loggedInUserId} </p> */}
                                {/* <p>{props.messages_4_loggedInUserId.userIDReceiver1.messagecontent ? props.messages_4_loggedInUserId.userIDReceiver1.messagecontent : "still loading"}</p> */}
                                {/* <p>what is in test props {props.test[0].thing1} </p> */}
                                
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
        

    )
  
}

function GenerateChatAllLeftSide({messages}){
    // let ans = ["1", "@"]
    // if(messages.userIDReceiver){
       
    //     // return(
    //     //     <p>messages {messages.userIDReceiver[0].messagecontent}</p>
    //     //     )
    // }
    // for(var i = 0; i < messages.userIDReceiver.length; i++){
    //     ans.push[messages.userIDReceiver[i]]
    // };
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
    // const fn = a => (a ? 1 : 2);
    return(
            // <p onClick={() => console.log(props.specificMessages.specificMessages.test[0])}>Hi there</p>
    // <p onClick={() =>console.log(right2)  }>  right2: {right2[0].messagecontent} left2: {left2[0].messagecontent} </p>
        <React.Fragment>
           
            {finallizedLeft[0]}
            {finallizedRight[0]}
            
        </React.Fragment>
    
            // <p>tongue</p>
        );
}

{/* <p onClick={() => console.log(props.specificMessages.specificMessages.test[0])}>Hi there</p> */}

// const mymesser = props.specificMessages.specificMessages.messages_4_loggedInUserId ? props.specificMessages.specificMessages.messages_4_loggedInUserId.map(message =>{
//     return <GenerateChatAllLeftSide messages={message}/>
// }) : ["1", "2"]

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
// function updateUserId2(userId){
//     fetchSpecificyMessage(userId)
//     useForceUpdate()
// }

function RenderContactProfileChat({users, data}) {
    const [count, setCount] = useState(0);
    return (
            
                <div className="card-body   chat_contacts_body">
                <ul className=" chat_contacts">
                    {users.map(user => {
                            return(
                            <li className="d-flex bd-highlight chat_contact_card " >
                                <div className="chat_user_image_and_cont" onClick={() => console.log(user.id2)} >
                                {/* onClick={() => this.props.fetchSpecificyMessage(user.id2) */}
                                {/* <div className="chat_user_image_and_cont" onClick={()=> {console.log(`hello there b man its , ${user.testText}`)}}>  onClick={loadMessageForUser("hi")}*/}
                                
                                
                                    <div className="img_chatuser_cont" >
                                        <Link to="/myprofile"><img  className="rounded-circle chatuser_img" src={user.avatar}  /></Link>
                                        
                                        <span class={`online_icon ${user.status}`}></span>
                                    </div>
                                    <Link to='/messagingcenter' onClick={fetchSpecificyMessage(user.id2)} > 
                                    
                                    <div className="chatuser_info" onClick={() => fetchSpecificyMessage(user.id2)}>
                                        
                                            <span className="chatusername">{user.name}</span>
                                    
                                        <span className="chatuserfullname">{user.fullName} is {user.status}</span>
                                    </div>
                                    </Link>
                                        
                                
                                    </div>
                                    
                                    <div>
                                        <span class="chat_close" onClick={()=> setCount(count + 1)}>&times;</span>
                                        <p>You closed {count} times</p>
                                    </div>
                                {/* </div> */}
                            </li>
                            
                            )
                        })}
                </ul>
                </div>
            
    );
}
// class MessagingCenter extends Component

function MessagingCenter(props){
    // constructor(props){
    //     super(props)
    //     this.toggleChatOption = this.toggleChatOption.bind(this);
    //     this.toggleModal = this.toggleModal.bind(this);
    //     this.state = {
    //         hasBeenClicked: false,
    //         isModalOpen: false,
    //     }
    // }
    // toggleChatOption(){
    //     this.setState({
    //         hasBeenClicked: !this.state.hasBeenClicked
    //     });
    //     // window.alert("hello there")
    //     // console.log(this.state.hasBeenClicked)
    // }

    // toggleModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }

    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen(prevState => !prevState);

    // render(){
        return(
            
            <React.Fragment>
                {/* MESSSANGER TEMPLATE GOES HERE */}

                {/* end of overall container for whole page */}
                {/* const user = props.loggedInUser.loggedInUser.slice(0,1).map(user => {
        return(          
            <MyUserProfileComponent user={user} />
        );
    }); */}
                {/* <p onClick={() => console.log(props.specificMessages.specificMessages.id)}> Test buttons change content</p> */}
                                {/* <p>{props.specificMessages.specificMessages.test[2]}</p> */}
                {/* <TestingButtonContent props={ props.specificMessages.specificMessages}/> */}
                <TestingButtonContent props={ props}/>
            </React.Fragment>
        )
    // }


// function chatSection(chattingWith) {
//     if(chattingWith.status == "active"){
//         return <ActiveChatter chatter={chattingWith}/>
//     }else{
//         return <InactiveChatter chatter={chattingWith}/>
//     }
// }




//  ActiveChatter(chatter){
//     return ( 
//         <div class="col-md-7 col-xl-8 chat">
//             <div class="card">
//                 <div class="card-header msg_head">
//                     <div class="d-flex bd-highlight">
//                         <div class="img_cont">
//                             <img src={chatter.avatar} class="rounded-circle user_img"/>
//                             <span class="online_icon"></span>                          
//                             {/* for inactive user <span class="online_icon offline"></span> */}
//                         </div>
//                         <div class="user_info">
//                             <span>Chat with {chatter.firstname}</span>
//                             <p>{chatter.messagetally}</p>
//                         </div>
//                         <div class="video_cam">
//                             {/* <span><i class="fad fa-video"></i></span> */}
//                             <span><i class="fa fa-video-camera"></i></span>
//                             <span><i class="fa fa-phone"></i></span>
                            
//                         </div>
//                     </div>
                    
                
                
//                     <UncontrolledDropdown id="action_menu_btn">
//                         <DropdownToggle>
//                             <i class="fa fa-ellipsis-v"></i>
//                         </DropdownToggle>
//                         <DropdownMenu class="action_menu">

//                             <DropdownItem><i class="fa fa-user-circle"></i> <Link to={`/userdirectory`}>View profile</Link> </DropdownItem>
//                             <DropdownItem><i class="fa fa-users"></i> Add to close friends</DropdownItem>
//                             <DropdownItem><i class="fa fa-plus"></i> Add to group</DropdownItem>
//                             <DropdownItem><i class="fa fa-ban"></i> Block</DropdownItem>
//                             {/* <DropdownItem divider />
//                             <DropdownItem>Another Action</DropdownItem> */}
//                         </DropdownMenu>
//                     </UncontrolledDropdown>
//                     {/* <span id="action_menu_btn" onclick={this.toggleModal}><i class="fa fa-ellipsis-v"></i></span> */}
                  
//                 </div>


//                 <div class="card-body msg_card_body">

//                     {this.generateChatContent({chattingWith})}
//                 </div>

//                 <div class="card-footer">
//                     <div class="input-group">
//                         <div class="input-group-append">
//                             <span class="input-group-text attach_btn"><i class="fa fa-paperclip"></i></span>
//                         </div>
//                         <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
//                         <div class="input-group-append">
//                             <span class="input-group-text send_btn"><i class="fa fa-location-arrow"></i></span>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
            
//     )
// }

//  generateChatHistory({chattingWith}){
//     //chattingWith should be == props.messages.messages.userIDReceiver //where userIDReciever is who you're chatting with

// }

//  generateChatContent({chattingWith}){
//     let chatContent = [];
//     for(var i = 0; i < chattingWith.length; i++){
//         if(chattingWith.messageby == loggedInUser){
//             chatContent.push(
//                 <div class="d-flex justify-content-end mb-4">
//                         <div class="msg_cotainer_send">
//                             {chattingWith.messagecontent}
//                             <span class="msg_time_send">{chattingWith.messagetimestamp}</span>
//                         </div>
//                         <div class="img_cont_msg">
//                     <img src={chattingWith.messangeravatar} class="rounded-circle user_img_msg"/>
//                         </div>
//                     </div>
//             )
//         }else if(chattingWith.messageby != loggedInUser){
//             <div class="d-flex justify-content-start mb-4">
//                         <div class="img_cont_msg">
//                             <img src={chattingWith.messangeravatar} class="rounded-circle user_img_msg"/>
//                         </div>
//                         <div class="msg_cotainer">
//                         {chattingWith.messagecontent}
//                             <span class="msg_time">{chattingWith.messagetimestamp}</span>
//                         </div>
//                     </div>
//         }else{
//             continue
//         }
//     }
//     return chatContent
// }


}


export default MessagingCenter;