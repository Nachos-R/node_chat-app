import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import ChatForm from './ChatForm.jsx';
import Messagess from './Messagess.jsx';
import { sendMessage } from './../actions/messagess';
import UserPanel from './UsersPanel.jsx';
import { deparam } from '../utils/deparam';

class ChatApp extends Component{
    
    constructor(props){
        super(props)
        const socket = io.connect('http://localhost:3000');
        this.state = {
            socket
        }
    }

    componentDidMount() {
        const socket = this.state.socket;

        socket.on('connect', () => {
            let params = deparam(window.location.search);

            socket.emit('join', params, (err) => {
                if(err){
                    
                    this.props.history.push('/');
                    alert(err);
                } else {
                    console.log('no error');
                }
            });
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        // socket.on('updateUserList', (users) => {
        //     console.log(users);
        //     this.props.dispatch(setUsers(users));
        // });
        

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
                <UserPanel socket={this.state.socket}/>
                <Messagess />
                <ChatForm socket={this.state.socket}/>
            </div>
        );
    }
};

export default connect()(ChatApp);