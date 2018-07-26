export default (state = [], action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
};