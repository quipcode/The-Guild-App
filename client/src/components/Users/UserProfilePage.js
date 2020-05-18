import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MyEditor from '../Features/AvatarEditor';
import { Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from '../Utilities/LoadingComponent';





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
                        <hr />
                    </div>
                </div>
                <div className="row">
                <UserProfileComponent user={props.user}/>
                </div>
            </div>
        );
    }
    return <div />;

}

function UserProfileComponent({user}){
    return(
        <div class="container emp-profile">
                    <form method="post">
                    
                        <div class="row">
                            <div class="col-md-3">
                                   <div class="profile-img">
                                   <ChangeProfileImage user={user} />
                                    <img  className="userprofileimage" src={user.image.small_url} alt={user.name}  data-holder-rendered="true" />
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
                        <MyEditor image={this.props.user} />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}


export default UserProfile;