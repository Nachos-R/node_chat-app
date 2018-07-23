const messagessReducerDefaultState = [];

export default (state = messagessReducerDefaultState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};