


import React from 'react';
import { connect } from 'react-redux';


import {fetchSpecificyMessage} from '../../redux/ActionCreators'

const RenderContactProfileChat = ({users, data, setMessage}) => {
    console.log(users)
    return(<div className="card-body   chat_contacts_body">
<ul className=" chat_contacts">
    {users.map(user => {
            return(
            <li className="d-flex bd-highlight chat_contact_card " >
                <div className="chat_user_image_and_cont" onClick={setMessage(user.id2)} >
                {/* onClick={() => this.props.fetchSpecificyMessage(user.id2) */}
                
                
                
                    <div className="img_chatuser_cont" >
                        <img  className="rounded-circle chatuser_img" alt={user.name} src={user.avatar}  />
                        {/* <Link to="/myprofile"><img  className="rounded-circle chatuser_img" src={user.avatar}  /></Link> */}
                        
                        <span className={`online_icon ${user.status}`}></span>
                    </div>
                    {/* <Link to='/messagingcenter' onClick={fetchSpecificyMessage(user.id2)} >  */}
                    
                    <div className="chatuser_info" >
                        
                            <span className="chatusername">{user.name}</span>
                    
                        <span className="chatuserfullname">{user.fullName} is {user.status}</span>
                    </div>
                    {/* </Link> */}
                        
                
                    </div>
                    
                    <div>
                        {/* <span class="chat_close" onClick={()=> setCount(count + 1)}>&times;</span> */}
                        {/* <p>You closed {count} times</p> */}
                    </div>
                {/* </div> */}
            </li>
            
            )
        })}
</ul>
</div>)}
    


const mapStateToProps = ({ specificMessages}) => ({
    specificMessages,
  });

  const mapDispatchToProps = dispatch => ({
    setMessage(id){
        return () => {
            dispatch(fetchSpecificyMessage(id))
            
        }
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(RenderContactProfileChat) ;