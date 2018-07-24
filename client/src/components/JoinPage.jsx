import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class JoinPage extends Component{

    join = () => {
        this.props.history.push('/chat');
    }

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
                            <input type="text" name="name" autoFocus />
                        </div>
                        <div className="form-field">
                            <label>Room name</label>
                            <input type="text" name="room" />
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

export default JoinPage;