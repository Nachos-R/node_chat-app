import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import JoinPage from '../components/JoinPage.jsx';
import ChatApp from '../components/ChatApp.jsx';
import { connect } from 'react-redux';

const AppRouter = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={JoinPage} />
            <Route path="/chat" component={ChatApp}/>
        </Switch>
    </BrowserRouter>
);

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps)(AppRouter);