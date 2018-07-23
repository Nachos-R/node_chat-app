import React from 'react';

const Message = (props) => {

    return (
        <p>{props.message.from}: {props.message.text}</p>
    );
};

export default Message;