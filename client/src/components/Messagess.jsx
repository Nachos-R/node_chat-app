import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

import Message from './Message.jsx';

class Messages extends Component{
    constructor(props){
        super(props);
        this.panel = React.createRef();
    }

    scrollToBottom = () => {
        const scrollHeight = this.panel.scrollHeight;
        const height = this.panel.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(this.panel).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    
    render() {
        return (
            <div className="messagess" ref={(panel) => {this.panel = panel }}>
                {this.props.messages.map((message, index) => <Message key={index} message={message} />)}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(Messages);