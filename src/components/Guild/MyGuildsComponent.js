import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

function MyGuilds(){
    return(
        // <div> 
        //     <p>Hello There</p>
        // </div>
        <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>My Guilds</BreadcrumbItem>
                </Breadcrumb>
                
                <hr />
            </div>
        </div>
        <div className="col" class="emp-profile">
            <h2 class="centered-header">My Guilds</h2>
            <div className="row">
                {/* {users} */}
            </div>
        </div>
      
        </div>
    )
}

export default MyGuilds