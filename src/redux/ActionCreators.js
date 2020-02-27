import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';





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


export const fetchMessages = () => dispatch =>{
    dispatch(messagesLoading());
    return fetch(baseUrl + 'messages/' + 'bman')
        .then(response => {
          if(response.ok){
              return response
          }else {
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
        .then(messages => dispatch(addMessages(messages)))
        .catch(error => dispatch(messagesFailed(error.message)))
}



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


