const request = require('request-promise');
const assert = require('assert');

describe('request', () => {
    it('shit works', (done) => {
        request('http://localhost:4000')
            .then(function (htmlString) {
                assert.equal(htmlString, 'Hello World\n');
                done();
            })
            .catch(function (err) {
                throw err;
            });
    });
});