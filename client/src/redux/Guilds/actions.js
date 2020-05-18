

import axios from 'axios'
export const MY_GUILDS_LOADING = 'MY_GUILDS_LOADING'
export const MY_GUILDS_FAILED = 'MY_GUILDS_FAILED'
export const MY_GUILDS = 'MY_GUILDS'

export const ALL_GUILDS_LOADING = 'ALL_GUILDS_LOADING'
export const ALL_GUILDS_FAILED = 'ALL_GUILDS_FAILED'
export const ALL_GUILDS = 'ALL_GUILDS'

export const fetchAllGuilds = () => dispatch  =>{
    dispatch(allGuildsLoading());
    axios.get('/api/guildTeams')
    
    .then(res => {dispatch(addAllGuilds(res.data))})
    .catch(error => dispatch(allGuildsFailed(error.message)));

}

export const addAllGuilds = allGuilds => ({
    type: ALL_GUILDS,
    payload: allGuilds
})

export const allGuildsLoading = () => ({
    type: ALL_GUILDS_LOADING
});

export const allGuildsFailed = errMess => ({
    type: ALL_GUILDS_FAILED,
    payload: errMess
});

export const fetchMyGuilds = () => dispatch  =>{
    dispatch(myGuildsLoading());
    axios.get('/api/myGuilds')
    
    .then(res => {dispatch(addMyGuilds(res.data))})
    .catch(error => dispatch(myGuildsFailed(error.message)));

}


export const myGuildsLoading = () => ({
    type: MY_GUILDS_LOADING
});

export const myGuildsFailed = errMess => ({
    type: MY_GUILDS_FAILED,
    payload: errMess
});

export const addMyGuilds = myGuilds => ({
    type: MY_GUILDS,
    payload: myGuilds
});



