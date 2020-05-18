import * as ActionTypes from './ActionTypes';

export const SpecificMessage = (state = {
    isLoading: true,
    errMess: null, 
    specificMessages: [],
}, action) => {
    switch(action.type){
        case ActionTypes.SPECIFIC_MESSAGE_LOADING:
            return {...state, isLoading: true, errMess: null, specificMessages: []}

        case ActionTypes.ADD_SPECIFIC_MESSAGES:
            return {...state, isLoading: false, errMess: null, specificMessages: action.payload};

        case ActionTypes.SPECIFIC_MESSAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, specificMessages: []};

        case ActionTypes.ADD_SPECIFIC_MESSAGE:
            const message = action.payload;
            return {...state, messages: state.messages.concat(message)};

        default:
            return state;
    }
};
