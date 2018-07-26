import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { login } from './../actions/login';

class JoinPage extends Component{
    state = {
        name: '',
        roomName: ''
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}));
    };

    onRoomNameChange = (e) => {
        const roomName = e.target.value;
        this.setState(() => ({roomName}));
    };

    join = (e) => {
        e.preventDefault();
        this.props.dispatch(login(true));
        this.props.history.push(`/chat/?name=${this.state.name}&room=${this.state.roomName}`);
    };

    render(){
        return (
            <div className="centered-form">
                <div className="centered-form__form">
                    <form onSubmit={this.join}>
                        <div className="form-field">
                            <h3>Join a Chat</h3>
                        </div>
                        <div className="form-field">
                            <label>Display name</label>
                            <input type="text" name="name" onChange={this.onNameChange} autoFocus />
                        </div>
                        <div className="form-field">
                            <label>Room name</label>
                            <input type="text" name="room" onChange={this.onRoomNameChange} />
                        </div>
                        <div className="form-field">
                            <Button variant="contained" color="primary" type="submit">Join</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default connect()(JoinPage);