import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Home(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <Breadcrumb>
            <BreadcrumbItem active><Link to="/home">Home</Link></BreadcrumbItem>
        </Breadcrumb>
                    
                    <hr />
                </div>
            </div>
            <div className="col" className="emp-profile">
                <h2 className="centered-header">Welcome to the Guild App</h2>
                <p className="centered-header"> A social media platform that allows you to engage with those with similar purpose, background, &amp; interests </p>
                <div className="row">
                
                </div>
            </div>
 
       
     </div>
    );
}

export default Home;   