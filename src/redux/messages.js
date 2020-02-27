import * as ActionTypes from './ActionTypes';

export const Messages = (state = {
    isLoading: true,
    errMess: null, 
    messages: [],
    loadMessagesForUser: null
}, action) => {
    switch(action.type){
        case ActionTypes.MESSAGES_LOADING:
            return {...state, isLoading: true, errMess: null, messages: []}

        case ActionTypes.ADD_MESSAGES:
            return {...state, isLoading: false, errMess: null, messages: action.payload};

        case ActionTypes.MESSAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, messages: []};

        case ActionTypes.ADD_MESSAGE:
            const message = action.payload;
            return {...state, messages: state.messages.concat(message)};
        
        case ActionTypes.LOAD_MESSAGE_FOR_USER:
            return {...state, isLoading: false, errMess: null, loadMessagesForUser: action.payload};
        default:
            return state;
    }
};