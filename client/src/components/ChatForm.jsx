import React, { Component } from 'react';

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
            from: 'User',
            text: this.state.message
        };

        this.props.socket.emit('createMessage', message, () => {
            
        });
        
        e.target.elements.option.value = '';
    }

    render(){
        return (
            <form id="message-form" onSubmit={this.sendMessage}>
                <input 
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.onMessageChange}
                    name="option"
                />
                <button>Send</button>
            </form>
        );
    }
};

export default ChatForm;