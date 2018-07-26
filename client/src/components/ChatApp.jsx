import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import ChatForm from './ChatForm.jsx';
import Messagess from './Messagess.jsx';
import { sendMessage } from './../actions/messagess';
import UserPanel from './UsersPanel.jsx';

const chat = io.connect('http://localhost:3000');

class ChatApp extends Component{
    componentDidMount() {
        console.log('chat app');
        chat.on('connect', () => {
            console.log('Connected to the server!');
        });

        chat.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        chat.on('newMessage', (message) => {
            this.props.dispatch(sendMessage(message));
        });

        chat.on('newLocationMessage', (message) => {
            this.props.dispatch(sendMessage(message));
        });
    }

    render(){
        return(
            <div>
                <UserPanel />
                <Messagess />
                <ChatForm socket={chat}/>
            </div>
        );
    }
};

export default connect()(ChatApp);