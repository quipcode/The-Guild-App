import * as ActionTypes from './actions'

//Making a reducer
export const AllGuilds = (state = {
    isLoading: true,
    errMess: null,
    allGuilds: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ALL_GUILDS:
            return { ...state, isLoading: false, errMess: null, allGuilds: action.payload };
       
        case ActionTypes.ALL_GUILDS_LOADING:
            return { ...state, isLoading: true, errMess: null, allGuilds: [] };
        case ActionTypes.ALL_GUILDS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
