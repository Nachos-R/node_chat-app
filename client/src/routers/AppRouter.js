import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import JoinPage from '../components/JoinPage.jsx';
import ChatApp from '../components/ChatApp.jsx';
import { connect } from 'react-redux';

const AppRouter = (props) => (
    <BrowserRouter>
        <React.Fragment>
            {
                props.login.loggedIn ? 
                <ChatApp /> :
                <Redirect from="/" to="/login" />
            }
            
            <Switch>
                <Route path="/" component={ChatApp} exact/>
                <Route path="/login" component={JoinPage} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps)(AppRouter);