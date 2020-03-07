import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

function GuildGenerator({guild}){
    return (
        <div className="holder col-md-3  ">
            {/* <input type="text" classNAme="search" onChange={this.searchHandler}/> */}
            <div className="userdirectoryusercarddiv">
            <ul className="userdirectoryul">
                    
                        <li className="userdirectoryli">
                            {/* <img src={user.images.sm}  width="100px" height="100px" alt="img"/>    */}
                            <img  className="userdirectoryimage" src={guild.avatar} alt={guild.name} roundedCircle width="75px" height="75px" border-radius="50%" margin="0 10px 0 0"  float="left" display="block" />
                            {/* <Link to={`/userdirectory/${user.id}`}> */}
                    {/* <Link to={`https://www.google.com/`}> */}
                                <span className="userdirectoryname">{guild.name}</span>
                            {/* </Link>   */}
                            <span className="userdirectoryfullname">{guild.purpose}</span>
                        </li>
                    
            </ul>
            </div>
        </div>     
);
}

function MyGuilds(props){
    const myGuilds = props.myGuilds.myGuilds.map(guild => {
        return(
            <GuildGenerator  guild = {guild}/>
        )
    })

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
                {myGuilds}
            </div>
        </div>
      
        </div>
    )
   
}

export default MyGuilds