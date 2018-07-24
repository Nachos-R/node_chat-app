import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import JoinPage from '../components/JoinPage.jsx';
import ChatApp from '../components/ChatApp.jsx';

const AppRouter = (props) => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={JoinPage} exact/>
            <Route path="/chat" component={ChatApp} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;