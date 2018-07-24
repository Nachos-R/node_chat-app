import React from 'react';
import { connect } from 'react-redux';

import Message from './Message.jsx';

const Messages = (props) => {

    return (
        <div className="messagess">
            {props.messages.map((message, index) => <Message key={index} message={message} />)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(Messages);