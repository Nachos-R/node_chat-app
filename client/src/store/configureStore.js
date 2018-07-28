import { createStore, combineReducers } from 'redux';
import messagessReducer from './../reducers/messagess';
import loginReducer from './../reducers/login';
import usersReducer from './../reducers/users';

export default () => {
    const store = createStore(combineReducers({
        messages: messagessReducer,
        login: loginReducer,
        users: usersReducer
    }));

    return store;
};