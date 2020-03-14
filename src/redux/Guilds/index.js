import * as ActionTypes from './actions'

//Making a reducer
export const MyGuilds = (state = {
    isLoading: true,
    errMess: null,
    myGuilds: []
}, action) => {
    switch (action.type) {
        case ActionTypes.MY_GUILDS:
            return { ...state, isLoading: false, errMess: null, myGuilds: action.payload };
       
        case ActionTypes.MY_GUILDS_LOADING:
            return { ...state, isLoading: true, errMess: null, myGuilds: [] };
        case ActionTypes.MY_GUILDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
