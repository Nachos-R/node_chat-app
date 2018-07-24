import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatForm from './components/ChatForm.jsx';
import Messagess from './components/Messagess.jsx';
import { sendMessage } from './actions/messagess';
import UserPanel from './components/UsersPanel.jsx';

let socket = io();

class App extends Component{
    state = {
        messagess: []
    };

    componentDidMount() {
        socket.on('connect', () => {
            console.log('Connected to the server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('newMessage', (message) => {
            console.log('new email', message);

            this.props.dispatch(sendMessage(message));
        });

        socket.on('newLocationMessage', (message) => {
            this.props.dispatch(sendMessage(message));
        });
    }

    render(){
        return(
            <div>
                <UserPanel />
                <Messagess />
                <ChatForm socket={socket}/>
            </div>
        );
    }
};

export default connect()(App);