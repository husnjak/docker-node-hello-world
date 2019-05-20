const request = require('request');
const assert = require('assert');

describe('request', () => {
    it('shit works', (done) => {
        request.get('http://localhost:4000').on('response', (response) => {
            assert.equal(response.body, 'Hello World');
            done();
        });
    });
});