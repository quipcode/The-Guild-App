import React, { Component, useState } from 'react'

// import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Dropdown, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { LoggedInUser } from '../redux/loggedUser';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {loadMessageForUser} from '../redux/ActionCreators'

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
                                    <div className="chatuser_info" >
                                        
                                            <span className="chatusername">{user.name}</span>
                                    
                                        <span className="chatuserfullname">{user.fullName} is {user.status}</span>
                                    </div>
                                        
                                
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
                    <div className="col" class="message-profile">
                        <h2 class="centered-header">Messaging Center</h2>
                        {/* <div className="row">
                            {users}
                        </div> */}
                    </div>
                {/* </div> */}


        
                <div class="row justify-content-center h-100">
                    {/* start of contact cards component */}
                    <div class=" col-md-5 col-xl-4 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
                            <div class="card-header">
                                <div class="input-group">
                                    <input type="text" placeholder="Search..." name="" class="form-control search"/>
                                    <div class="input-group-prepend">
                                        <span class="input-group-text search_btn"><i class="fa fa-search"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body contacts_body">
                                <ui class="contacts">
                                <li class="active">
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Khalid</span>
                                            <p>Kalid is online</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon offline"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Taherah Big</span>
                                            <p>Taherah left 7 mins ago</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Sami Rafi</span>
                                            <p>Sami is online</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon offline"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Nargis Hawa</span>
                                            <p>Nargis left 30 mins ago</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon offline"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Rashid Samim</span>
                                            <p>Rashid left 50 mins ago</p>
                                        </div>
                                    </div>
                                </li>
                                </ui>
                            </div>
                            <div class="card-footer"></div>
                        </div></div>

                        {/* end of contact component card above ^^^^ */}


                        {/* Start of chat section below */}
                        <div class="col-md-7 col-xl-8 chat">
                            <div class="card">
                                <div class="card-header msg_head">
                                    <div class="d-flex bd-highlight">
                                        <div class="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
                                            <span class="online_icon"></span>
                                        </div>
                                        <div class="user_info">
                                            <span>Chat with Khalid</span>
                                            <p>1767 Messages</p>
                                        </div>
                                        <div class="video_cam">
                                            {/* <span><i class="fad fa-video"></i></span> */}
                                            <span><i class="fa fa-video-camera"></i></span>
                                            <span><i class="fa fa-phone"></i></span>
                                            
                                        </div>
                                    </div>
                                    
                                 
                                    {/* <Button id="action_menu_btn" outline style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}} onClick={this.toggleModal}>
                                        <i class="fa fa-ellipsis-v"></i>
                                    </Button> */}
                                    
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

                                    {/* went away from modal...because couldn't get beneath line to work */}
                                    {/* <span id="action_menu_btn" onclick={this.toggleModal}><i class="fa fa-ellipsis-v"></i></span>
                                    <div class="action_menu">
                                        <p>dropdown</p>
                                   

                                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                                            <ModalBody>
                                    
                                        <ul>
                                            <li><i class="fa fa-user-circle"></i> View profile</li>
                                            <li><i class="fa fa-users"></i> Add to close friends</li>
                                            <li><i class="fa fa-plus"></i> Add to group</li>
                                            <li><i class="fa fa-ban"></i> Block</li>
                                        </ul>
                                        </ModalBody>
                                    </Modal>
                                    </div> */}
                                </div>
                                <div class="card-body msg_card_body">
                                    <div class="d-flex justify-content-start mb-4">
                                        <div class="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                                        </div>
                                        <div class="msg_cotainer">
                                            Hi, how are you samim?
                                            <span class="msg_time">8:40 AM, Today</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-4">
                                        <div class="msg_cotainer_send">
                                            Hi Khalid i am good tnx how about you?
                                            <span class="msg_time_send">8:55 AM, Today</span>
                                        </div>
                                        <div class="img_cont_msg">
                                    <img src="data:image/jpeg;base64,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" class="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-4">
                                        <div class="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                                        </div>
                                        <div class="msg_cotainer">
                                            I am good too, thank you for your chat template
                                            <span class="msg_time">9:00 AM, Today</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-4">
                                        <div class="msg_cotainer_send">
                                            You are welcome
                                            <span class="msg_time_send">9:05 AM, Today</span>
                                        </div>
                                        <div class="img_cont_msg">
                                    <img src="data:image/jpeg;base64,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" class="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-4">
                                        <div class="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                                        </div>
                                        <div class="msg_cotainer">
                                            I am looking for your next templates
                                            <span class="msg_time">9:07 AM, Today</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end mb-4">
                                        <div class="msg_cotainer_send">
                                            Ok, thank you have a good day
                                            <span class="msg_time_send">9:10 AM, Today</span>
                                        </div>
                                        <div class="img_cont_msg">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGBcXFxgXFxgdFxcXHRcXGhcYHSggGBolHRYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyUtLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABBEAABAwIDBAgFAgQDCAMAAAABAAIRAyEEEjEFQVFhBhMicYGRobEyUsHR8ELhBxQjcjOS8RUWNENigqKyU3OE/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAgEDBAIBBQAAAAAAAAABAhEDIRIEMUEFEyJRMjNhFCNxgeH/2gAMAwEAAhEDEQA/APQq9PM0gbxz13bxv5rxnb+c13kVKbXNOjw4VALACNXtOY24CbCFfNodLX1AAwZZY4MiILhEDsiZtxOnNUfpPiKdWMQwAO/W0FrSdTeXkuIJ1DRKmpplfktf8JRWbWc0gPptY64uWkuZbX4SQ8Rujgrr0hq5g5rg46RbSI08JXjnQzpg7AVn1GsFRtRkOYXEGxkEG97nirmOmxxbbYd1KSXSarR2QZzBoEmADyKhKq2aceRxkn9CnpoGOytboAdL8PVeYVWQTxk+69E6SuljKosHkgCZMa35gqnfy7alSoC6L25ws+J6o09TJTlyiAbNDutaBqTaPP6FfSGHORoDKNAWF8gM21nevn2hT6pzX5hLTLeIt7EWK9i6KdJ6NejTaajBVa0Nc0mDYRInWVZRkZYcViC6jVD202gscIAjUEQTwuV4rtDFmlZph2s2ieHeYPkrx0yxpnqmk6SeF5i2h3a8V57jgKjoiQDabkxIJ9ChLdhekK62KrPu6XRxmY8NVJRqPGkDvGikoVQHQ2bbtN+hBKkq12zDjra14n2UhA7sQ/iJ7kNXa48STyR73AGMpka6QPX2XHWuvkbpvQAJR2c49pxDe8wpHspCwOY8hbzNvJRV6jnGCQY3WP3RWGwObUwOIiPZAA7WuJ+ENHEwPr9F0eqGsuPJGHZzeTuRdr5iPVY3BHcyOcA2QAOGM1aw+Q+yyriQ21xyCIds8zJdHfI9ioqzLRDT4n6piAztFs2D/MLn/aLdAHDmY+i5xNEHS35yQVQXj2ugAmrip3+32UZfOoEodzY/dFYBgLmtcQGkgE6wCdbJMaLD0XpZi93/AEtHq5XTZdd7aNekwCHgF17wJFvOVHT6EOwbBVZVbWpuaM0AgCYggzDhrw1Rez6WZ7WBoGYEbxaDvJNrBVWpIspxkgF1Wp1bXNdEDqrawO0IUOCpONWmTJOdtzzMazzRbXZqVOoAMjqj2tcB2C4NiBxPZPktU6rmkOBAgg6Dcpxk3BoJv5II6p/4FiYZhwH+YLazcWavcRRMZWL6DS1zHQ5pgAghzjqXT2b2jW66pUDTqt6xzmU3uAqgSS0kw+wNxFwE/Z0bZQw1VjSXFwkk6y27dLSOO9C7ZdSp0qbxmJqMl3a5g+hOvNW7iUuSyulGkC4rolhTX/o4sClBJfVYdRfLDIInSTwKS4+pToNFNpeRmJMOJI+UAmzeMDdxXdSg+R1dCoC+MhcDlkn4pbYnS5Qm1cFUa91OqYLYOgNuMjXvUqfllUYtSobYOp12zze9Ct3nLUE+5cPBVnEnK5zhx99U02DULevpXAdlMR8mb6EeSW7Sw8XBsTB74lCVSY0viAuxBO9S4SscwvvHuhHs1Cn2ZhnVKjWtmSR7q0rXcve0qzi0OBmAbkk5i0WEndoq2KxhgBu2JO8edjonm1HhoYNcr2g33EO95Vb2thSycrszSRB4gnsn1jkQUgbJWiS4kuMncDpxJ3IhhaBZs905fGBB8Uqp5mkBxOXi7NB36jcmrMKCAWl27Ql7b8HC48QUMDH1HE2ad3ICO7cozh3v+J2UcCHZfT6roNM2mf8AMPAb/Bcio4T2r30BHoQhAdEOb8JbHIkTy4FDV8XV+b1j6LVSTfKTzAj7BDVqZFiT5T6oA76walrhxgz9Qo31mfMfI/usFASIDr6TZcnD8u8Xn90xHXXu/TVt4j3ChqYmof1zHMe0LsYPh9Quzg5bb4gfNMAR2Kdo8X5k/VcdZ+H/AEU1Si4W1HCELk5JAd5xvH55rttY/N9FzRaN65dT5oAunRPpDXaw0nF1ShGWILuqJktI+VskhN9hbQZWYGzq3QmJ3Ec1RNj7UdQcbWcC0931V1wWzMNlo56mRpaDnB7YeIm8HW27eq+NOyxytIe1qAIaCJDPhBJIbaLDQGCRbitdW1dUNs0TI7FjDSaYl/MDjx04wisLj84MQI1GVoPLQJ2iptg+bmfNYmHXu+ZbRofJm34tjy+mwgwSL6xuMdyX4XDU6tFrXMJLDUpmCNA4OYYmR39youN2vWbU+UzIAaBodIA/JVo2X0hey7WjLUOZ5y/CYguEjukKMvslhbuh9VZUDIYwEiwzvyxzsDKp3Txz6Zp1HBmaIImQQ0ggEaibju7lc8VtKWtcKmbfaBA0Lrd6VYrZ7Kjy97Gvfxd2tNNbJwp7J5OcHT0VKkzrNotL2ZG1mN1duqUhlcI3Zgg9v4J1Bz2OhwDtRvtAPfBE9xXoFPDgQAxttwjdyjcl/TijRqYUtZlFSm4OgCDrDt28EeSjJvkirk4nlsk6qy9EMOAXPOoAA4wTJ8TB8lX3U7wrL0StTe/i7xhrTHuVaM52hL3PEwC6e+IhQMYAMr3jS2hmdYMme5d16TnPBBtz019DCzEbNgdkzG4ye+27dfmgQXiMGAyC3M03BGt50/N5QGHpgNcGkggAtPhlMnhZp8Udg2viHOtltqY5X0i3mhamIAbMSGkhwGoG+O783IAHbXmzoPM39QuXPINiSP7gR5ESFDXe2QRZcPqcDu8x3IGgym0QTbdu/OakETOn5uSqlULjM2Redw3juKVjoLquabfngoyRvv6eaFNcb9O9a60agwmFHdTXswe68hDurHh9Fy6sDqR9udly4zo4JkaN1KkqBx5Lqowje36+iGqNQBM4W/Ch3HcugDExC0XygDnMmGCxHZyybacI/YpY8QpcHUyvadwISYy9bD2cSDUqPJefhE/4Y5DcT+yZMrOpuzDUeo4LWy8Z1jN2YRPO1lDjKxNyq72DHP8AvCz5XeixVnOeI8lidioA22JZRrttoTH/AFgfVpRmxsVTDRmIubk35g8d672cHOw5Y4dumXCHfNTIqNB43BHmpul+AZVZTxmHhrakGo0GMj7g27wQecHQp6Yskfo72ltUNqANLSXtyyHANgyB2pgapps3bNMsaHn+pEFrRcETzgyLrzetLSI4+Ewp6zWudnzTETxdbgfhO7XcklXYlxuF32Lk7bxbUDgDbNIlpIBEaC5Jsgsfif5lmZz221AMuJFwHchuVeqU5pF7Nzhm4jh4SoamJOjSQN/AfdR4u7NePPCUHCa/wb6v4nHhDfG0+qsHR8ZGjlc+31Crzqjv1HUWn3VnwQy0QADMEkxeT+eytMjVMIxOEksiwOU8+X1UWJaBUmBJEbwHC+vOwHgjesDerJ32+vpMJRtPEwQJ+ExutB177HzQImosgkgmC05ZAkcjx3Ku7SrFry5sQ6ZHH95BUzcduFiJ3eDlwXZwQRv7Q3jmEAAhwO6VtrDrp9E32FsttR+V099h6pjjOjNQXAkHeBZQeRJ0WxxNqyt0pGg+yLdSc0STrwCa4PZTmH+qwjh9xx/dHuwAqA+kyoc9k1AqbHiYi/fCytVn9IHqm2J2WZj9XDcf2QGJ2ecpI+Iat/ZTUiEosXOj9rfVazf9IjjP4FzUYdCPRQlo3lTINEtV9vyB3LimT+fnNaMLXWwmRZskb5UzAO5D9aN3nClw9KSPdAWcV6JHcoaeo7wisceem5QMYZE8QkMsOBxbqbtfDiE7NTMA4FVuZHPci8BjA0w423qADXPyWKXrqfzNW0goYYih1eIOhFSnSqyNHFvYeR36+KHr0mEPY6A3IMpgZg5vwjSS0iAY79ykJLm0XOEFtR9IxoG1RLY/7gpMTh8xFrkD9x5hS8g+wqFGm2k+mWglxJDyzQQLAm/E6pJU2VUy5mjM4n9JtHH3VrZRa3W0rYc1o7MeWnehRSJyyylBR+ivYLZ5aHsdJz5A6JganUcyEyw/R/qnh7agaGmwc2SRvB4zJTDryeHr9VrUi5OlkMqS2Mto9H6GKwjqjaeWqztBwsSGuOZpA1loPmqtiqxa6ZsHNB4WFx6r0LowTlcAwhs753x9ivN9qkFlRukkkeIHt9FK7H5GBrB+sgSCBEHTgqxteuesdfX33+onxTn+Zzm2uUEbpgR+eKS7TdmJPE/X/RAxYa51lN6WFL8r2zLvtdJmtJMC5XrfQ/osamGa4dh4uCQdY0PEGyryTUUW4ocmKth7HeDJkcwB7Qr9hGMpMmpJaBv38gAEXsjAEDttylpMiZHIzvslvSPESYmwtAke3csblyezYo0qRXeke2hUJaGBjByuefLeqnUx7m/C4z3nTn+ye4ykXGzB3fgSnF7JzauAHAx9YWiLVFMouxbi9sgwHCSOBvK3T2sHESRPke6d6kd0dbudPcfooH7Ey8VLlEgoSCH4Ev7TYnvHCygqbLzSHABw3wT6tRuBokEXsrFSwwcBI+6i8jRasSZ5xi8MWmCO5QCmNfZejYrZ7SCHCe9V7HbHpCTA8LKay2VzwVsrTQ0b/VSmraw8dSia1Om3T6oGrB0KtTszyVEtKk0XcbcDvWqcOqC28IGUx2aJe2x3+x+6TEhvisP+oaKNl9yaYSmSNJChxGEymQIURgvVt+UeSxT5DyWIFZZaTi9r25Y7Ie3jmY4EW8XKXHgENcORB39oT9V3haRzAgGNDusQQfdbbQinJ/S4tM78jvsQm+4l2FpudZKJw+znuvZvfPsnGVrdIHcFo1+amRB6Wymj4jPmPqp20GNiAB7qN1fmohXkwL9wJSY+4aK+XQkdxhUrpJs8sbTdBh5f5NcWa8wPRW4U3ndHejdq7NFWjhGkA/4gkf3k+8qqc+NM04MLnJxZ5U6vle08onvEj3RtbDNcy36rjz09Crd026D9W1houGYN7TTa8buCp+zmvkMIM3gExfh5j1TjkUlojLFKJnQ7Yz6+Mota2QHB5/tae1r3r6QweDDWwAvK/wCE2EnF1HgdkUzHe4tkd+q9fpLPmdyLYfGAs2nhDEtsVTNsYXEC7aXWdy9JcyUPXozoqePkshl8M8J2vsvaDv0FjeAtbiYuVVttbMrUXSc5aQIcR2TxuLW719E4vCvM5Y7iqVtXZtRriere2ZnJdp8NFbDLXgcsakeebA2C+tRdUJLb9g7jAuYi4mLrnC4h9N5pvM+oPcTcK21mO0l/+SPZQ0+j4e4l1N2szJHoFNzsI4mvILs+iCYg+SteD2ZLZ1WYPZMQY5c45q17JwkNjwVLey9aR57tqlkkqn45zn74Xp/TjZ56p5Gv7hePbSznPEjLoDqb3MK3FspzS0RVdm5tH34IOts+o3UeKI2aKlSo1gPxGNAQBvOiOr1alF/V1e0DoRMH7FaLaMtJiF9NM9hsmXRpYc51+iK21hQKZeN8R4kJ90X6MF+EZUDu255ME9nKJHnaU7tEJLiQuwcgDMRy3JtsrZDqrgHDsjU7iBu709wWwKbbvOd3/iPDf4pqwAaeSVMrcyL+TZ8jViJlaTpkLEr6v4EHiapDnN3Oh+vzCHeqnxG18HSs+sHkbm9r/wBB7lVzbPSxj3TTpmIiXBree4E+qbRNDykHOaIbuudBbW5WqrQ0S54A5fc2VGrbaq3h+UHWPufFQ4fD1axGVr3kmxgn/wAjb1T7CouGI2xh2NzSXgmBFwSNRuHugh0tq5XCi1rGgSc5kcoAiXa+RQ+zujIe3+piW0yLBgp1KrvPstHmn2ydjUKbSHYek8n9dTO49+Quyj996hyvsiSXkrTa+OxQn+sWXu2m8U/NggDmZXqnQ/BBuEw7TUZV6uo4Zm5o7ZLsvaANs0TySfD0crcgc/L8uZ2XuyzpyVg6PEFr6Wmjm+Fj46KrLGTjs09POpgXSoOqYk02yZ3JlszoyynhKjXNBe7M4E6i1iOGhTDZ+DFV4qOtUAIncUXQDv6jXTEfgWVWjbll8eC8UVP+GWHLHYmREuaWndBB3+Sv1J91UeiRLX1aZEGQdLEDQ+UWVow773Tm/kZ3HQxaJXfV2UNJyKDVOOzLK0AV8PyS6tRBT+qBF0DXa1SlEuxZGI3bNadQu2YFo3fRGPAUTsU0b1DsaVb7GmbPndZHsw0aKLDYxrj2U2pMEJxSZny5JR0ys9JcFmpPHFpXljtnTff9l7VtenLSvM304qOHNJtxZfi+cNlUrbPIJLew46kNFxwNpQGJ2L1rgXOJPdEfl16A3Dyo62BH5+c/RP3WN4kUTaezIw75vka5w7wx0eVz4K7dHsJ1WFoUyILabZ7yAT6kpdtLZhqtcwODZBud+7L3mYVhzbgtOF2jJ1daSOw1aAWg52gC5yk8VaYyWyxDzyWkCs8iobKr1BmZSeWzBMWHfKs2zejNNrQ59UuqX7LaM5ZbHxOdFpO5OaWDawuG+e0ZBBPG1j3o2myyi02WWV/BdH8r87hTLpkEh9u8TkP7p71T3j+pUdU4AuIbH9unhopoXYHNPihWyNlENFgB3QFknNEWiff9vNS2WZwmI6auX7WGGisZAYRI+adWjmbrh9YQqh00rE5Gk2vA+vMwk1qiUW0z3vZ4pVmNq0iMr2ggjeCEW7J8A1j8914D0D2/jabhhqP9RjiZaZ7Em7g4aC+i9c2FQqtxAdUdOambbhdp+ixT+Lo2cOUXKwtmygypnae9TFMKoQtVirmiUJ33Mo1IRZxPNAFCV8RCSlRL2lJjGvjgRqltfGgXlLMXtCN6R43afNPk2XQxRiOMftbh5pRQxRrVW09zj57/AKJXQc+u+JsrKMB1bWupjtMuOdrz5lBdaSLTg9n9WBDbJrhhbW3svKsV/ECvTqZXYdxA/LcVZdg9NmVwYOVw1a4QR4cOasi1HZiy4py8ln2m6AvN9rkiqHNEtE5o571ZNo7caTBIVRqbWYKpk2hRlLk9F+GHCOxphHAomqyyr+G2oMwYGuuTDgLDhKcHESFCiwXVoFRp5/Qo2d6U7Sq9pscfoVaqOwHm5e0DlJWrC6Rg6yO0xX1vNa61PG9HG73nwACKpbDpDUE95+yv5GLiVjruSxWz/ZNH5B5n7rEuQcTzylhwBEWUzaaJ6orfVKwAbIVmUKbqlnVlICOyhczXginNsoYJQBC1iQdK8AXtY4C7XHduIVl6k8fBdHCzu+6GxoB/hDg4rVXxHZDTzvP2XsXVDXf+fYqodEdmikC4CC8kxppafRXGdCsE3cjVK1FERqiY3gSoarluqYMISpVvCrky2ESKtVhLMZWOqJxL0txrxEWlQNC0VvauOINknDXVDeQ1PcVhQZ3lIsc98EMaSeXsrYUE2/BY9jvpsgD8KstOuNF5lgDiqRzVcO87wWFro8LFPaPSGoIy4Sq7vEeyk0RSkx5tPCNfqO8wvPtsgMqdiQ4WDhY+is9XpnVFn0AwcHBzfUhLauOw9R2ZwyHUzcHiBCaJODoRVMZW/UdURsnD9vM7tO5390VjcZQJAaR36e6ifUDNDbjZNkfxGWcB0oh2LgWSOtipDYN1JnmBxSonF8nSDTXzGSi8J/FLqqjsNXpXY7I2oDYgRllsTMQlzLFVfbGyajsfnynq3Fjy7d2WtzCeMhW4mth6hi4uMD2P/beIcJaxoHcT7lDu2vWd+sjugR6JXh8aYaWyOSOqVJJMeSug7jZycq4ypEn8/V/+R/mVihz8liZXbNRzWNbOgnuurY3Z9IERTbrOkm3fzR1mjcB5JcyagU1mz6p0pu8o91O3YVY/KO932BVjq4+kNXt859kJV25SHzHuH1MI5MdIAp9HCR2qnk37lEUujlIal7vGB6KM9IgbNpn/ALiPoFC7blQ7mjwJ90bYWkNaeyaQjsDxv7optFrbBoHcAq0cfWefjN9ALeUKwbKwjmiXklx4kmOWqqyy4osgrJadP0KYUnWhDxD43ELb+yY8ljUi6W9A2IeTNrj1QdV8gXU+PcYzDdqk1bGtEGeyfRQk9mjHHRlerG9LcRWkc1PiKoIsljgZjXmmiyiG5KY7JwQmXBRUqE7k5wDALEFOwJ34dutkBiMc2me0zxCcGnASTadKQbT4JpjTIa21aNQEFzXDg4D2KruO2Vh3mQ2P7HFo8hZA7V2OSTAcPNJqmGrMtmeB4q5bJc68Bu0NkURZofPN5Stmx3kf4jomwm37o/DYZ5d2nE+aaNZlanyorklIX7PwkCXGY0XbNSfJaqvJOUeN1I0WSbOj6d0/KfN9kdjVO8PgBVoEyBDrTNjzMWFykgNuYKf7BeS1zZMET5qzEk5bMnq1xm2Q7NbJN5DQb6ab12cQePqtj+m10/q7LePM9yCLgtjSSpHAtydsL61bQfWd6xQoKLPV2hVdq93gY9kM9zjqSZ4rkrbjCdEjIUVeGgucQ0DUkmB5ITaW1W098u+UfU7lXNq7VqVRBDQAZiT6ooEhq/pFSaTlDndwgeZKjp9L6Vg5j2ibnsujjYESqpVqG8geBQdWDofBOiR730UxGEqtzYeq2o79W57eRYbt8k9c6F8x4fEvpPD2Pcx7dHNJBHiPZeldDv4lZy2hjCA42bXEAE7hUGjSfmFuQWLNhl3WzRBp6PTa3aFtRopGv61nBw9CELTqQVlXsnO3Q6/dZbLXD/gOatyDYjUfm5INtYLV1PxbPsrFi2CoJFnDTnyKQ4qobgiCNRvUGaYOypjaZbIM242I8OC23aYF/rKl2vgw4ToeI/Lqo4oVKZI/PJWximEnR6DgdpNO9N8NigYgryKjtgtNyU0w/SUjfbw/Ap+0/BX7iPW6VYHepKjgvOcH0rB1cEcOkgj4rd6XBj5IsmKcOR+iV18K06gJTU22HWkqF+1rWT4MfJB1TCtboAkm0qt8rRJ5LjE7YJs2Z90EcPUccxdlUuNdzV03TyzPS0TUKETvJ1Uj2wJ0Cjq41rBAh7uWg70BUxj3fEfBFHoI8MUeMQ0vhjnk2Any3qLZ/SNhd1bJk6OsBYEnW/BTNoZqTm73NI8wiOiWw8NTB605nuBE6FunwjcfdX4pRim33OH6tilOSS+jf8yXXMk7vt7LtkqWtgQx0TPAjQjcQugAtC2ebcWnRFB5raIy96xS4sfty+hcemdMH4CR/cJ/9Sgcd0qc+Q1xY3gNf832Shz1C4ooYX/MsM9onxhQ1Hc3Dxn6oR4HALWfiPJMDp73jQz3qE1mk3kFF02tdo6DwdceChr4Wd0cxogCMttxCgq0vJcua5uhWCvxSHZf+hf8QTQaKGKDn022ZUHaewfK4E9sDjr3r1LZe1aNdmejUbUZocpmORBu08iF84SDyU+z9oVaDxUovdTeN7TE8iNHDkZWXJ0yltF8M3hn0U7s93tyQG0abag4OGjhu+45KldH/wCJjXxTxbch06xgJYf7mat7xIVlq4xrgHscHNcJDmkEHxCxThKHc245KW0JsWHNOV4h27e13cUlxjAZkQVZcVUa9uV1/dV/GNLde03jv8eaIkmVvGYG5MfZLamEhWaqEDXp8lojIzyiI+qK6ax24nzTLqwugwKfJkOIHTY/5iisPh3G5eY8l3lGgRLIAhJyNvR4FlyJPsjuiMvw256nzK25gPxEu71H1i11nC/ddVnpYRUVSVBNKk0aDwC6bgQ42ssoYJxu45G89VvEbUYwZGGeaCUnFL5BnWhrmtB018FHtekDUD26uHr/AKITBjPe95uiKtMtLWA9qQWuNm3GhPHVTSOP10uU0/4GuzmtqMFMuDngSzeXZjdo8iQOSFdjmB5YIn6jUDut6qHC1+rDqhDWVqUuzD9fJvEadyRUQQesce3Np75Lj7rd0qb2zBHDHnzLNmfw9Fi56w/IPMra6Vm3X0UZ3eo3PK25RuK57PMGdZO+65f5LlwBUZkcx6pBZJ1sa+YRdKvzS7NP2XTDwQMPcAUHVocFIyqui+e9AABCwVeKIqDj5qB9JAjZMiyJ2VtuthnTTd2Tqx0ljvDceYulzgQszg6qLSemSjJp6PUNk7fp4hsskOHxMPxN9O0OYU1erqvKqVV1NwewlrhoR+aK67E242u0g9mqBdvzRvb9tyxZMDjtdjbjzqWn3Cq7OFkBVJBuj3c1FUYoIsaACVy2k5MWUgbR5olmEHBTsjxFgDWCXeKnO06B1YfBp+ylLWzBI7lt+GJ0UW7PQ+m4ZQx8l3YM7a2HH6D4grR6QCP6bPIQphs4C51W/wCVA0CWjc/d+0LnY59X43OA4AI3C4BpuDPepjmHwhqGqU3ON3X5KRU/jt7G2AIFRrYsJ07k0pbPFWWPJIHw3Ai2vKJKW7GwhgvO4Hx4lNWOH3V0YXE8513Wf3xZt+GMZScBIMyNHAAAH19EgfXa1rqj/hFo48kXtyoOtyt3Q3x3+pVT6RY2SKbfhHut+NcIEnl4w5Dn/e1vyu/zLSpmZYn7rKf6qQ+cSFznHcUQSoKjJVTOWcvXBK4JIsdFjikBp48CuRU46rCVG47j4IAIa9d50LTqbjquy5AwkPWi2NFCHLptRAGyVDUoBESCuXUjqECAbhdU3kEOYS1zTIO8KZzuIXBY06GEDRZMH0mYQBVaWu3uaJb3xqO66cse17Q5jg5u4gyO7v5KgGmeRUmAxtSg/My4/U3c4c+fNZp4F3RohnfaR6FQoyQTu9EXX7LSUDsjaVOqzMw94OrTwP5ddbaxwZRqO4NPqLesLLT5UbLVWQ4qg5jsr27gQZGjgCDz1WU6R/S49yTbF2uP5Uda4g0SGTBJyPksBgbiHgeCKb0iww/5jj3McrZQd9ju9L1mF4lckv8AY0a928HyWOSWp0oobhUd/wBoHuUtxXSs/wDLpBvNxJ9BAQsUvonk9T6aC/KyykTxPJQ0qwfUFGmQ6odYuGDe5x+nFUnFbVrVPiqGODeyPIJt/D+sW4sCJzNI7ogyFbHD9nH6n1dzTWNV/J6hSZlsP06fn0W3PABO6JOgsB+y6ul+3KmSi8zd0NHjr7FXxWziQuc0vsqONxPx1TxJHedFSazyTJVh6R1srWsHefRVtyun9G3qJbUfo5WLcrFEzbLDh1p2q2sSZSD1lDTW1iQGlDWWLECNvXe5YsQM6K2sWIGbRDFixAEWKQK2sQB1TWjqsWIGO+hf+O7/AOs+6b9MP8MfnBYsWR/sRqh+oRbM/wCDxv8A+b/2qJA7VbWLV4Mi7s2FzU1W1iGJHIVk6Af8a3+130WliQz1j90m6Tf4bf7x7OWLFLH+RZ037Eeb9Jf8XwSRYsU5dy7P+bOVixYokD//2Q==" class="rounded-circle user_img_msg"/>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-start mb-4">
                                        <div class="img_cont_msg">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
                                        </div>
                                        <div class="msg_cotainer">
                                            Bye, see you
                                            <span class="msg_time">9:12 AM, Today</span>
                                        </div>
                                    </div>
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
                        {/* end of chat section above */}
                        <div>
                            
                            
                        </div>
                        
                        {/* <TestingButtonContent/> */}
                        
                    </div>
                    {/* end of container for chat + contact slider */}
                    
                </div>
                {/* end of overall container for whole page */}
                {/* const user = props.loggedInUser.loggedInUser.slice(0,1).map(user => {
        return(          
            <MyUserProfileComponent user={user} />
        );
    }); */}
                <p onClick={() => console.log(props.specificMessages.specificMessages.id)}> Test buttons change content</p>
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