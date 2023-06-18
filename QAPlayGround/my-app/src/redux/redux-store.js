import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage: '',
    coursesPage: '',
    userCoursesPage: '',
})


let store = createStore(reducers, applyMiddleware(thunk))
window.store = store;

export default store;