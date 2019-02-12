var should = require('should');
var supertest = require('supertest');
var fs = require('fs');
var request = require('request');
//var apikey = 'QaQ11JZZLZXNHdYSsoHDLA5k';

describe('remove-bg', function (req, res) {
    // beforeEach(() => {
    //     nock('http://localhost:3000')
    //       .post('/remove-bg')
    //       .reply(200, response);
    //   });

    it('Remove image background', function (done) {
        var localfile = `${__dirname}/image/image.jpeg`
        var base64imageData = fs.readFileSync(localfile, { encoding: "base64" });
        
        request.post({
            headers: {'content-type' : 'application/json'},
            url: 'http://localhost:3000/remove-bg',
            body: "{\"base64imageData\":\""+ base64imageData+"\"}"
        }, function (error, response, body) {
            assert.notEqual(response.body.b64imageOutput, null);
        });
        done();
    });
});
