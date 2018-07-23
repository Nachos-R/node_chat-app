let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let message = {
            from: 'admin',
            text: 'Welcome to owr chat'
        };

        let res = generateMessage(message.from, message.text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude(message);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'User';
        let latitude = 42;
        let longitude = 19;
        let res = generateLocationMessage(from, latitude, longitude);
        let url = 'https://www.google.com/maps?q=42,19';
        
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, url});
    });
});