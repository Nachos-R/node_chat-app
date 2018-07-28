import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import Header from './Header.jsx';
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
            socket,
            roomName: '',
            visibility: false
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
                    this.setState(() => ({roomName: params.room}));
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

    toggleUserPanel = () => {
        this.setState(() => ({visibility: !this.state.visibility}));
    }

    render(){
        return(
            <React.Fragment>
                <Header onClick={this.toggleUserPanel} roomName={this.state.roomName}/>
                <UserPanel socket={this.state.socket} visibility={this.state.visibility}/>
                <Messagess />
                <ChatForm socket={this.state.socket}/>
            </React.Fragment>
        );
    }
};

export default connect()(ChatApp);