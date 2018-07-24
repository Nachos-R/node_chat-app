import React from 'react';
import moment from 'moment';

const Message = (props) => {
    const formattedTime = moment(props.message.createdAt).format('h:mm a');

    return (
        <div className="message">
            <div className="message__title">
                <h4>{props.message.from}</h4>
                <span>{formattedTime}</span>
            </div>
            <div className="message__body">
                {props.message.url ? 
                <a target="_blank" href={props.message.url}>My current location</a> : 
                <p>{props.message.text}</p> }
            </div>
        </div>
    );
};

export default Message;