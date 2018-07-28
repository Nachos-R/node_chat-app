export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const removeUser = (id) => ({
    type: 'REMOVE_USER',
    id
});