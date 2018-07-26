import { createStore, combineReducers } from 'redux';
import messagessReducer from './../reducers/messagess';
import loginReducer from './../reducers/login';

export default () => {
    const store = createStore(combineReducers({
        messages: messagessReducer,
        login: loginReducer
    }));

    return store;
};