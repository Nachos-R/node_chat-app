import React from 'react';
import moment from 'moment';

const Message = (props) => {
    const formattedTime = moment(props.message.createdAt).format('h:mm a');

    return (
        props.message.url ?
        <p>{props.message.from} {formattedTime}: <a target="_blank" href={props.message.url}>My current location</a></p> :
        <p>{props.message.from} {formattedTime}: {props.message.text}</p>
    );
};

export default Message;