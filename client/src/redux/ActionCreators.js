import * as ActionTypes from './ActionTypes';
import axios from 'axios'

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

export const fetchLoginUser = () => dispatch  =>{
    dispatch(userLoginLoading());
    axios.get('/api/loggedInUser')
    .then(res => {dispatch(userLoginSuccess(res.data))})
    .catch(error => dispatch(userLoginFailed(error.message)));
}


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

export const fetchUsers = () => dispatch  =>{
    dispatch(usersLoading());
    axios.get('/api/results')
    .then(res => {dispatch(addUsers(res.data))})
    .catch(error => dispatch(usersFailed(error.message)));

}


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


export const fetchSpecificyMessage = (messageId) => dispatch  =>{
    dispatch(specificMessageLoading());
    axios.get(`/api/messages/${messageId}`)
    .then(res => {dispatch(addSpecificMessages(res.data))})
    .catch(error => dispatch(specificMessageFailed(error.message)));
}

export const addUser = user => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

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

export const fetchChatContacts = () => dispatch  =>{
    dispatch(chatContactsLoading());
    axios.get('/api/chatcontacts')
    .then(res => {dispatch(addchatContacts(res.data))})
    .catch(error => dispatch(usersFailed(error.message)));
}

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

export const fetchnoteToSelf = () => dispatch  =>{
    dispatch(noteToSelfLoading());
    axios.get('/api/messages/bman')
    .then(res => {dispatch(noteToSelf(res.data))})
    .catch(error => dispatch(noteToSelfFailed(error.message)));
}