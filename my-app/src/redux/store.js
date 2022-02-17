import {combineReducers, createStore} from 'redux';
import profileReducer from './redusers/profile-reduser';
import dialogReducer from './redusers/dialog-reduser';
let reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
});


let store = createStore(reducersBatch);

export default store;