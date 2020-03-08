import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

function GuildGenerator({guild}){
    return (
        // <div className="holder col-md-3  ">
        //     {/* <input type="text" classNAme="search" onChange={this.searchHandler}/> */}
        //     <div className="userdirectoryusercarddiv">
        //     <ul className="userdirectoryul">
                    
        //                 <li className="userdirectoryli" key={guild.id}>
        //                     {/* <img src={user.images.sm}  width="100px" height="100px" alt="img"/>    */}
        //                     <img  className="userdirectoryimage" src={guild.avatar} alt={guild.name} roundedCircle width="75px" height="75px" border-radius="50%" margin="0 10px 0 0"  float="left" display="block" />
        //                     {/* <Link to={`/userdirectory/${user.id}`}> */}
        //             {/* <Link to={`https://www.google.com/`}> */}
        //                         <span className="userdirectoryname">{guild.name}</span>
        //                     {/* </Link>   */}
        //                     <span className="userdirectoryfullname">{guild.purpose}</span>
        //                 </li>
                    
        //     </ul>
        //     </div>
        // </div>    
        <div className="container myGuild-ultra-container"  key={guild.id} >
              <div class="myGuild-card" class="myGuild-container" >
                <div class="myGuild-card-body">
                <img src={guild.avatar} class="float-left rounded-circle" roundedCircle width="225px" height="225px" border-radius="50%"  margin="0 10px 0 0" float="left" display="block"/>
                <div class="myGuild-message">
                    <Link to={`/myguilds/${guild.id}`}>
                    <h5 class="card-title">{guild.name}</h5>
                    </Link>
                    <h6 class="card-subtitle mb-2 text-muted">{guild.purpose}</h6>
                    <p class="card-text">Founded on {guild.foundedOn}, with a member size of {guild.membersCount}, and impacts the world at a {guild.impact} level</p>
                  
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                    
                </div>
                <div class="myGuild-actions">
                    <a href="#" class="card-link">Like</a>
                    <a href="#" class="card-link">Reply</a>
                    <a href="#" class="card-link">Share</a>
                </div>
                </div>
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