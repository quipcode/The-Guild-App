import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';
import { createBrowserHistory } from 'history';





export const fetchLoginUser = () => dispatch =>{
    dispatch(userLoginLoading());
    // return fetch('http://localhost:3002/loggedInUser')
    return fetch(baseUrl +'loggedInUser')
        .then(response => {
            if(response.ok){
                return response
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); 
                error.response = response;
                throw error
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(loggedInUser => dispatch(userLoginSuccess(loggedInUser)))
        .catch(error => dispatch(userLoginFailed(error.message)));
}



export const userLoginSuccess = loggedInUser => ({
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload: loggedInUser
})



export const userLoginLoading = () => ({
    type: ActionTypes.USER_LOGIN_LOADING
})

export const userLoginFailed = errMess => ({
    type: ActionTypes.USER_LOGIN_FAILED,
    payload: errMess
})



export const fetchUsers = () => dispatch => {
    dispatch(usersLoading());
    // return fetch(baseUrl + 'users')
    // return fetch('http://localhost:3002/results')
    return fetch(baseUrl + 'results')
   
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
        
};




export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});






export const messagesLoading = () => ({
    type: ActionTypes.MESSAGES_LOADING
})

export const messagesFailed = errMess => ({
    type: ActionTypes.MESSAGES_FAILED,
    payload: errMess
})

export const addMessages = messages => ({
    type: ActionTypes.ADD_MESSAGES,
    payload: messages
})

export const addMessage = message => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
})

export const loadMessageForUser = userId =>({
    type: ActionTypes.LOAD_MESSAGE_FOR_USER,
    payload: userId
})





export const addSpecificMessages = specificMessages => ({
    type: ActionTypes.ADD_SPECIFIC_MESSAGES,
    payload: specificMessages

})

export const specificMessageLoading = () => ({
    type: ActionTypes.SPECIFIC_MESSAGE_LOADING
})

export const specificMessageFailed = errMess => ({
    type: ActionTypes.SPECIFIC_MESSAGE_FAILED,
    payload: errMess
})

// export const addSpecificMessage = specificMessage => ({
//     type: ActionTypes.ADD_SPECIFIC_MESSAGE,
//     payload: specificMessage
// })
// const sman = 'sman'
export const fetchSpecificyMessage = (sman) => dispatch => {
    console.log("id is ", sman)
    dispatch(specificMessageLoading());
    
    return(fetch(baseUrl + `messages/${sman}`))
        .then(response =>{
            
            if(response.ok){
                return response
            }else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response
                throw error
            }
        },
            error => {
                var errMess = new Error(error.message)
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(
            specificMessages => 
            dispatch(addSpecificMessages(specificMessages)
            )
            
            )
        .catch(errMess => dispatch(specificMessageFailed(errMess.message)))
}










export const addUser = user => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const postUser = (userId, userName, userAvatar, avatarImage) => dispatch => {

    const newUser = {
        userId: userId,
        userName: userName,
        userAvatar: userAvatar,
        avatarImage: avatarImage
    };
    newUser.date = new Date().toISOString();
    console.log(newUser)

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addUser(response)))
        .catch(error => {
            console.log('post user', error.message);
            alert('Your user could not be posted\nError: ' + error.message);
        });
};



export const fetchMyGuilds = () => dispatch => {
    dispatch(usersLoading());
    // return fetch(baseUrl + 'users')
    // return fetch('http://localhost:3002/results')
    return fetch(baseUrl + 'results')
   
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
        
};



export const chatContactsLoading = () => ({
    type: ActionTypes.CHATCONTACTS_LOADING
});

export const chatContactsFailed = errMess => ({
    type: ActionTypes.CHATCONTACTS_FAILED,
    payload: errMess
});

export const addchatContacts = chatContacts => ({
    type: ActionTypes.CHATCONTACTS,
    payload: chatContacts
});

export const fetchChatContacts = () => dispatch => {
    dispatch(chatContactsLoading());
    return fetch(baseUrl + 'chatcontacts')
   
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(chatContacts => dispatch(addchatContacts(chatContacts)))
        
        .catch(error => dispatch(usersFailed(error.message)));
        
};


export const noteToSelfLoading = () => ({
    type: ActionTypes.NOTETOSELF_LOADING
});

export const noteToSelfFailed = errMess => ({
    type: ActionTypes.NOTETOSELF_LOADING,
    payload: errMess
});

export const noteToSelf = chatContacts => ({
    type: ActionTypes.NOTETOSELF,
    payload: chatContacts
});


export const fetchnoteToSelf = () => dispatch => {
    dispatch(noteToSelfLoading());
    
    return(fetch(baseUrl + `messages/bman`))
        .then(response =>{
            
            if(response.ok){
                return response
            }else{
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response
                throw error
            }
        },
            error => {
                var errMess = new Error(error.message)
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(notesToSelf => dispatch(noteToSelf(notesToSelf)))
        .catch(errMess => dispatch(noteToSelfFailed(errMess.message)))
}
