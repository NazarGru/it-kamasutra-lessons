import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reduser'

let reducersBatch = combineReducers({
    profilePage: profileReducer
});


let store = createStore(reducersBatch);

export default store;