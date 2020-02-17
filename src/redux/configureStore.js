// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// import { Reducer, initialState } from './reducer';

import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Users } from './users';
// import { Comments } from './comments';
// import { Partners } from './partners';
// import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createForms } from 'react-redux-form';
// import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
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