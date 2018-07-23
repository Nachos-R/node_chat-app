import { createStore, combineReducers } from 'redux';
import messagessReducer from './../reducers/messagess';

export default () => {
    const store = createStore(combineReducers({
        messages: messagessReducer
    }));

    return store;
};