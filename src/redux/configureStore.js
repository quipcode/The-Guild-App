import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Users } from './users';
import {LoggedInUser} from './loggedUser'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Messages } from './messages';
import { SpecificMessage } from './specificmessage';
import {MyGuilds} from './Guilds/index';
import {AllGuilds} from './Guilds/allGuilds';
import {ChatContacts} from './chatcontacts';
import {NoteToSelf} from './notetoself'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            loggedInUser: LoggedInUser,
            messages: Messages,
            specificMessages: SpecificMessage,
            getMyMessagesForUser: "bman",
            myGuilds: MyGuilds,
            allGuilds: AllGuilds,
            chatcontacts: ChatContacts,
            noteToSelf: NoteToSelf
        }), applyMiddleware(thunk, logger)
    );

    return store;
}



