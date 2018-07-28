import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { setUsers } from '../actions/users';

class UserPanel extends Component{

    componentDidMount() {
        const socket = this.props.socket;

        socket.on('updateUserList', (users) => {
            console.log(users);
            this.props.dispatch(setUsers(users));
            console.log(this.props.users);
            
        });
    }

    render(){
        return (
            <div id="users">
                <h3>People</h3>
                <ul>
                    {this.props.users.map((user, index) => (<li key={index}>{user.name}</li>))}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(UserPanel);