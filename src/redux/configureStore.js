// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// import { Reducer, initialState } from './reducer';


// import { Comments } from './comments';
// import { Partners } from './partners';
// import { Promotions } from './promotions';

// import { createForms } from 'react-redux-form';
// import { InitialFeedback } from './forms';

import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Users } from './users';
import {LoggedInUser} from './loggedUser'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';

// const config = {
//     key: 'root',
//     storage,
//     debug: true
// }

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            loggedInUser: LoggedInUser
            // comments: Comments,
            // partners: Partners,
            // promotions: Promotions,
            // ...createForms({
            //     feedbackForm: InitialFeedback
            // })
        }), applyMiddleware(thunk, logger)
    );

    return store;
}



// const store = createStore(
//     reducer, /* preloadedState, */
 
//   );

// export const ConfigureStore = () => {
//     const store = createStore(
//         persistCombineReducers(config, {
//             Users,
//             // comments,
//             // partners,
//             // promotions,
//             // favorites
//         }),
//         applyMiddleware(thunk, logger)
//     );

//     const persistor = persistStore(store);

//     return { persistor, store };
// };