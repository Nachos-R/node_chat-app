let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate corrcet message object', () => {
        let message = {
            from: 'admin',
            text: 'Welcome to owr chat'
        };

        let res = generateMessage(message.from, message.text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude(message);
    });
});