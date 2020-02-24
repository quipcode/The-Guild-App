import * as ActionTypes from './ActionTypes'

//Making a reducer
export const Users = (state = {
    isLoading: true,
    errMess: null,
    users: [],
    // loggedInUser: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERS:
            return { ...state, isLoading: false, errMess: null, users: action.payload };
       
        case ActionTypes.USERS_LOADING:
            return { ...state, isLoading: true, errMess: null, users: [] };
        case ActionTypes.USERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
