import * as ActionTypes from './ActionTypes'

//Making a reducer
export const ChatContacts = (state = {
    isLoading: true,
    errMess: null,
    chatcontacts: [],
    // loggedInUser: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CHATCONTACTS:
            return { ...state, isLoading: false, errMess: null, chatcontacts: action.payload };
       
        case ActionTypes.CHATCONTACTS_LOADING:
            return { ...state, isLoading: true, errMess: null, chatcontacts: [] };
        case ActionTypes.CHATCONTACTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
