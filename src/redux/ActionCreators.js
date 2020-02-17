import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';



export const fetchUsers = () => dispatch => {
    dispatch(usersLoading());
    return fetch(baseUrl + 'users')
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
