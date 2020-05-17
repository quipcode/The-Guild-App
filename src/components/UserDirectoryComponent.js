import React, {Component, Text} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading } from './LoadingComponent'
import Image from 'react-bootstrap/Image'



//using comic vine
function RenderDirectoryItem({user}) {
    return (
            <div className="holder col-md-3  ">
                {/* <input type="text" classNAme="search" onChange={this.searchHandler}/> */}
                <div className="userdirectoryusercarddiv">
                <ul className="userdirectoryul">
                        
                            <li className="userdirectoryli">
                                {/* <img src={user.images.sm}  width="100px" height="100px" alt="img"/>    */}
                                <img  className="userdirectoryimage" src={user.image.medium_url} alt={user.name} roundedCircle width="75px" height="75px" border-radius="50%" margin="0 10px 0 0"  float="left" display="block" />
                                <Link to={`/userdirectory/${user.id}`}>
                        {/* <Link to={`https://www.google.com/`}> */}
                                    <span className="userdirectoryname">{user.name}</span>
                                </Link>  
                                <span className="userdirectoryfullname">{user.real_name}</span>
                            </li>
                        
                </ul>
                </div>
            </div>     
    );
}

function UserDirectory(props) {

    const users = props.users.users.map(user => {
        return(          
            <RenderDirectoryItem user={user} />
        );
    });

    if(props.users.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            
        )
    }

    if(props.users.errMess){
        return(
            <div className="container">
                <div className="row">
                    {props.errMess}
                </div>
            </div>
            
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>User Directory</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <hr />
                </div>
            </div>
            <div className="col" class="emp-profile">
                <h2 class="centered-header">User Directory</h2>
                <hr/>
                <div className="row">
                    {users}
                </div>
            </div>
          
        </div>
    );
}

export default UserDirectory;

