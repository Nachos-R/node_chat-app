import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from './App.jsx';
import configureStore from './store/configureStore';
import './style/style.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app"));