export const sendMessage = (message) => ({
    type: 'SEND_MESSAGE',
    message
});

export const clearMessages = () => ({
    type: 'CLEAR_MESSAGES'
});