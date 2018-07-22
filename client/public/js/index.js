let socket = io();

socket.on('connect', () => {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        from: 'karen',
        text: 'hey, i am fine'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('new email', message);
});