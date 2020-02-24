import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from './AvatarEditor';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AvatarEditor from 'react-avatar-editor';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';





function MyUserProfile(props) {
    // my 'props.loggedinusers.loggedinuser' will contain all information pertinent to the logged in user i.e. details, preferences messages...profile detail will only be available in the first inde
    const user = props.loggedInUser.loggedInUser.slice(0,1).map(user => {
        return(          
            <MyUserProfileComponent user={user} />
        );
    });
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Loading />
                    </div>

                </div>
            </div>
        )
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {props.errMess}
                    </div>
                </div>
            </div>
        )
    }

    if (props.loggedInUser) {
        return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            {/* <BreadcrumbItem><Link to="/myprofile">My Profile</Link></BreadcrumbItem> */}
                            <BreadcrumbItem active>My Profile</BreadcrumbItem>
                            {/* <BreadcrumbItem active>{props.loggedInUser}</BreadcrumbItem> */}
                        </Breadcrumb>
                        {/* <h2>{props.campsite.name}</h2> */}
                        {/* <h2>{props.loggedInUser.loggedInUser.name}</h2> */}
                        {user}
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {/* <MyUserProfile user={props.user}/> */}
                    {/* <MyUserProfileComponent user={props.user[0]} /> */}
                    
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
    // return <h3>hello there</h3>

}


function MyUserProfileComponent({ user }) {
    return (
        <div class="container emp-profile">
            <form method="post">

                <div class="row">
                    <div class="col-md-3">
                        <div class="profile-img">
                            <ChangeMyProfileImage user={user} />
                            <img className="userprofileimage" src={user.image.small_url} alt={user.name} data-holder-rendered="true" />
                            {/* <div class="file btn btn-lg btn-primary" onClick={this.toggleModal}> */}
                        </div>


                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                {user.name}
                            </h5>
                            <h6>
                                Web Developer and Designer
                                    </h6>
                            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    {user.deck}
                                </Tab>
                                <Tab eventKey="profile" title="Profile">

                                    {user.aliases}
                                </Tab>
                                <Tab eventKey="contact" title="Contact" >

                                    {user.description}
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

class ChangeMyProfileImage extends Component {

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

                <Button style={{ float: "right" }} outline onClick={this.toggleModal} >
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


// class MyUserProfile extends Component {
//     constructor(props) {
//         super(props);

//         this.toggleModal = this.toggleModal.bind(this);

//         this.state = {
//             // isNavOpen: false,
//             isModalOpen: false

//         };

//     }

//     toggleModal() {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         });
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <Breadcrumb>
//                                 <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                                 <BreadcrumbItem active><Link to="/myprofile">My Profile</Link></BreadcrumbItem>
//                                 {/* <BreadcrumbItem active>{props.user.name}</BreadcrumbItem> */}
//                             </Breadcrumb>
//                             {/* <h2>{props.campsite.name}</h2> */}
//                             <hr />
//                         </div>
//                     </div>
//                     <div className="row">
//                         {/* <MyUserProfile user={props.user}/> */}
//                         <UserProfileComponent user={props.user} />
//                         {/* <RenderCampsite campsite={props.campsite} />
//                     <RenderComments
//                         comments={props.comments}
//                         // addComment={props.addComment}
//                         postComment={props.postComment} 
//                         campsiteId={props.campsite.id}
//                     /> */}
//                     </div>
//                 </div>

//                 <div class="container">
//                     <div className="row">
//                         <div className="col">
//                             <Breadcrumb>
//                                 <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                                 <BreadcrumbItem active>Messaging Center</BreadcrumbItem>
//                             </Breadcrumb>

//                             <hr />
//                         </div>
//                     </div>
//                 </div>
               
//                 <div class="container emp-profile">
//                     <form method="post">
//                         <div class="row">
//                             <div class="col-md-3">
//                                 <div class="profile-img">
//                                     {/* <img class="rounded-circle" src="http://localhost:3001/images/ben-sweet-2LowviVHZ-E-unsplash.jpg" alt="" /> */}
//                                     <img className="userprofileimage" class="rounded-circle" src={baseUrl + 'images/bman.jpg'} alt="" />
//                                     {/* http://localhost:3001/images/bman.jpg */}
//                                     <div class="file btn btn-lg btn-primary" onClick={this.toggleModal}>
//                                         {/* <div class="file btn btn-lg btn-primary" onClick={evt => this.updateRotateValue(evt)}></div> */}
//                                         Change Photo
//                                         {/* <input type="file" name="file" /> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-md-6">
//                                 <div class="profile-head">
//                                     <h5>
//                                         Kshiti Ghelani
//                                     </h5>
//                                     <h6>
//                                         Web Developer and Designer
//                                     </h6>
//                                     <p class="proile-rating">RANKINGS : <span>8/10</span></p>
//                                     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//                                         <Tab eventKey="home" title="Home">
//                                             <p>Say what again</p>

//                                         </Tab>
//                                         <Tab eventKey="profile" title="Profile">
//                                             <p>I dare you</p>
//                                         </Tab>
//                                         <Tab eventKey="contact" title="Contact" >
//                                             <p>you scared little man</p>
//                                         </Tab>
//                                     </Tabs>
//                                     {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
//                                         <li class="nav-item">
//                                             <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
//                                         </li>
//                                         <li class="nav-item">
//                                             <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
//                                         </li>
//                                     </ul> */}
//                                 </div>
//                             </div>
//                             <div class="col-md-2">
//                                 <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
//                             </div>
//                         </div>
//                         <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                             <ModalHeader toggle={this.toggleModal}>Avatar Editor</ModalHeader>
//                             <ModalBody>
//                                 <Form onSubmit={this.handleLogin}>
//                                     <FormGroup>
//                                         <Label htmlFor="username">Username</Label>
//                                         <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Label htmlFor="password">Password</Label>
//                                         <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
//                                     </FormGroup>
//                                     <FormGroup check>
//                                         <Label check>
//                                             <Input type="checkbox" name="remember"
//                                                 innerRef={input => this.remember = input} />
//                                             Remember me
//                                 </Label>
//                                     </FormGroup>
//                                     <Button type="Submit" value="submit" color="primary">Login</Button>
//                                     <Button  value="submit" color="secondary" onClick = {this.toggleModal}>Cancel</Button>
//                                 </Form>
//                                 {/* <MyEditor /> */}
//                             </ModalBody>
//                         </Modal>

//                         <div class="row">
//                             <div class="col-md-4">
//                                 <div class="profile-work">
//                                     <p>WORK LINK</p>
//                                     <a href="">Website Link</a><br />
//                                     <a href="">Bootsnipp Profile</a><br />
//                                     <a href="">Bootply Profile</a>
//                                     <p>SKILLS</p>
//                                     <a href="">Web Designer</a><br />
//                                     <a href="">Web Developer</a><br />
//                                     <a href="">WordPress</a><br />
//                                     <a href="">WooCommerce</a><br />
//                                     <a href="">PHP, .Net</a><br />
//                                 </div>
//                             </div>
//                             <div class="col-md-8">

//                                 {/* where meat of tabs was */}
//                             </div>
//                         </div>
//                     </form>
//                     <div class="row text-center">


//                         <div class="col-md-6 mb-4">

//                             <h2 class="my-5 h2">Basic example</h2>

//                             <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
//                                 data-holder-rendered="true" />

//                         </div>



//                         <div class="col-md-6 mb-4">

//                             <h2 class="my-5 h2">With shadow</h2>

//                             <img class="rounded-circle z-depth-12" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
//                                 data-holder-rendered="true" />

//                         </div>


//                     </div>
//                 </div>

//             </React.Fragment>


//         )
//     }
// }

export default MyUserProfile;