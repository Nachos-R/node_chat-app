const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Hans',
            room: 'Node.js'
        }, {
            id: '2',
            name: 'Cristian',
            room: 'React'
        }, {
            id: '3',
            name: 'Andersen',
            room: 'Node.js'
        }];
    });
    it('should add a new user', () => {
        let users = new Users();
        let user = {
            id: 42,
            name: 'Yura',
            room: 'Fullstack'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '2';
        let user = users.removeUser('2');

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '23';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let user = users.getUser('1');

        expect(user).toBe(users.users[0]);
    });

    it('should not find a user', () => {
        let user = users.getUser('42');

        expect(user).toNotExist();
    });

    it('should return users for Node.js room', () => {
        let userList = users.getUserList('Node.js');

        expect(userList).toEqual([users.users[0], users.users[2]]);
    });

    it('should return users for React room', () => {
        let userList = users.getUserList('React');

        expect(userList).toEqual([users.users[1]]);
    });
});