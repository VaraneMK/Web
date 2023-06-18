import { combineReducers, legacy_createStore as createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersRecuder';

let reducers = combineReducers({ profilePage: profileReducer, dialogPage: dialogsReducer, usersPage: usersReducer });
let store = createStore(reducers);
window.store = store;

export default store;
