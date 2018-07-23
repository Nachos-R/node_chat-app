import React from 'react';

const Message = (props) => {

    return (
        props.message.url ?
        <p>{props.message.from}: <a target="_blank" href={props.message.url}>My current location</a></p> :
        <p>{props.message.from}: {props.message.text}</p>
    );
};

export default Message;