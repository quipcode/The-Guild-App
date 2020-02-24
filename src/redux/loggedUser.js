import * as ActionTypes from './ActionTypes';


export const LoggedInUser = (state = {
    isLoading: true,
    errMess: null, 
    loggedInUser: null
}, action) => {
    switch(action.type){
        case ActionTypes.USER_LOGIN_SUCCESS:
            return {...state, isLoading: false, errMess: null, loggedInUser: action.payload};
        case ActionTypes.USER_LOGIN_LOADING:
            return{...state, isLoading: true, errMess: null, loggedInUser: []}
        case ActionTypes.USER_LOGIN_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default: 
            return state;
    }
}


