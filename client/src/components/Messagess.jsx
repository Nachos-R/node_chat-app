import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

import Message from './Message.jsx';

class Messages extends Component{
    constructor(props){
        super(props);
    }

    scrollToBottom = () => {
        // const { messageList } = this.refs;
        // const scrollHeight = messageList.scrollHeight;
        // const height = messageList.clientHeight;
        // const maxScrollTop = scrollHeight - height;
        // ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;

        const messagess = document.getElementsByClassName('.messagess');
        console.log(messagess);
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    
    render() {
        return (
            <div className="messagess">
                {this.props.messages.map((message, index) => <Message key={index} message={message} />)}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(Messages);