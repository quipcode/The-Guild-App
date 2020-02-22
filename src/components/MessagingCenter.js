import React, { Component } from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';

class MessagingCenter extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
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
                        {/* <div className="row">
                            {users}
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MessagingCenter;