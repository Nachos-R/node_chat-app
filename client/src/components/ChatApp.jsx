import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import ChatForm from './ChatForm.jsx';
import Messagess from './Messagess.jsx';
import { sendMessage } from './../actions/messagess';
import UserPanel from './UsersPanel.jsx';

class ChatApp extends Component{
    state = {
        socket: null,
    };

    componentDidMount() {
        const socket = io.connect('http://localhost:3000');

		socket.on('connect', () => {
            console.log(window.location.search);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
		if(!this.state.socket){
            this.setState(() => ({socket}));
        }
    }

    componentDidUpdate(){
        const socket = this.state.socket;

        socket.on('newMessage', (message) => {
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
                <ChatForm socket={this.state.socket}/>
            </div>
        );
    }
};

export default connect()(ChatApp);