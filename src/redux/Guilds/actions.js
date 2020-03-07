export const MY_GUILDS_LOADING = 'MY_GUILDS_LOADING'
export const MY_GUILDS_FAILED = 'MY_GUILDS_FAILED'
export const MY_GUILDS = 'MY_GUILDS'


export const fetchMyGuilds = () => dispatch => {
    dispatch(myGuildsLoading());
    // return fetch(baseUrl + 'users')
    // return fetch('http://localhost:3002/results')
    return fetch(baseUrl + 'myGuilds')
   
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
        .then(myGuilds => dispatch(addMyGuilds(myGuilds)))
        .catch(error => dispatch(myGuildsFailed(error.message)));
        
};




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