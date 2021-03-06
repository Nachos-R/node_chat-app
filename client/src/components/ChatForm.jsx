import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import io from 'socket.io-client';

import LocationButton from './LocationButton.jsx';

class ChatForm extends Component{
    state = {
        message: ''
    };
    
    onMessageChange = (e) => {
        const message = e.target.value;

        this.setState(() => ({message}));
    }

    sendMessage = (e) =>{
        e.preventDefault();

        const message = {
            text: this.state.message,
        };

        this.props.socket.emit('createMessage', message, () => {
            
        });
        
        this.setState(() => ({message: ''}));
    }

    render(){
        return (
            <div className="chat-form">
                <form id="message-form" onSubmit={this.sendMessage}>
                    <Input 
                        className="textInput"
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.onMessageChange}
                        name="option"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                        autoFocus
                        autoComplete="off"
                    />
                    <Button className="sendButton" variant="contained" color="primary" type="submit">Send</Button>
                    <LocationButton socket={this.props.socket}/>
                </form>
            </div>
        );
    }
};

export default ChatForm;