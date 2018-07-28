const messagessReducerDefaultState = [];

export default (state = messagessReducerDefaultState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            return [
                ...state,
                action.message
            ];
        case 'CLEAR_MESSAGES':
            return [];
        default:
            return state;
    }
};