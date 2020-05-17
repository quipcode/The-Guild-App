import * as ActionTypes from './ActionTypes';

export const NoteToSelf = (state = {
    isLoading: true,
    errMess: null, 
    noteToSelf: [],
}, action) => {
    switch(action.type){
        case ActionTypes.NOTETOSELF_LOADING:
            return {...state, isLoading: true, errMess: null, noteToSelf: []};

        case ActionTypes.NOTETOSELF:
            return {...state, isLoading: false, errMess: null, noteToSelf: action.payload};

        case ActionTypes.NOTETOSELF_FAILED:
            return {...state, isLoading: false, errMess: action.payload, noteToSelf: []};

        default:
            return state;
    }
};
