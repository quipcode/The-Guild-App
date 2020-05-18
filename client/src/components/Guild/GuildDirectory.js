import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Loading} from '../Utilities/LoadingComponent'


function RenderGuildItem({guild}) {
    return (
            <div className="holder col-md-3  ">
                
                <div className="userdirectoryusercarddiv">
                <ul className="userdirectoryul">
                            <li className="userdirectoryli">
                                <img  className="userdirectoryimage" src={guild.image.medium_url} alt={guild.name} roundedCircle width="75px" height="75px" border-radius="50%" margin="0 10px 0 0"  float="left" display="block" />
                                <Link to={`/guilddirectory/${guild.id}`}>
                                    <span className="userdirectoryname">{guild.name}</span>
                                </Link>  
                                <span className="userdirectoryfullname">{guild.deck}</span>
                            </li>
                        
                </ul>
                </div>
            </div>     
    );
}

function GuildDirectory(props){
    const guilds = props.allGuilds.allGuilds.map(guild =>{
        return(
            <RenderGuildItem guild={guild}/>
        )
    } )
 

    if(props.allGuilds.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            
        )
    }

    if(props.allGuilds.errMess){
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
                        <BreadcrumbItem active>Guild Directory</BreadcrumbItem>
                    </Breadcrumb>
                    
                    <hr />
                </div>
            </div>
            <div className="col" class="emp-profile">
                <h2 class="centered-header">Guild Directory</h2>
                <hr/>
                <div className="row">
                    {guilds}
                </div>
            </div>
          
        </div>
    );
    
}

export default GuildDirectory