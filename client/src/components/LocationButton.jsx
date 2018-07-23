import React, {Component} from  'react';

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
            <button onClick={this.sendLocation}>Send location</button>
        );
    }
};

export default LocationButton;