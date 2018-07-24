import React, {Component} from  'react';
import Button from '@material-ui/core/Button';

class LocationButton extends Component{
    sendLocation = () => {
        if(!navigator.geolocation){
            return alert('Geolocation not supported by your brouser');
        }

        navigator.geolocation.getCurrentPosition((position) => {
            this.props.socket.emit('createLocationMessage', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, () => {
            console.log('Unable to fetch position');
        });
    }

    render() {
        return (
            <Button className="locationButton" variant="contained" color="primary" onClick={this.sendLocation}>Send location</Button>
        );
    }
};

export default LocationButton;