var should = require('should');
var supertest = require('supertest');
var fs = require('fs');
var request = supertest('localhost:3000');
var localfile = `${__dirname}/image-test/image.jpeg`
var base64imageData = fs.readFileSync(localfile, { encoding: "base64" });
var base64data = JSON.stringify({"base64data":base64imageData})
var outputFile = `${__dirname}/image/file.png`;

describe('remove-bg', function (req,res) {
    it('Remove image background', function (done) {
        request.post('/remove-bg')
            .set('Content-Type', 'application/json')
            .set('apiKey', 'QaQ11JZZLZXNHdYSsoHDLA5k')
            .set('base64img', base64data)
            .set('size', 'regular')
            .set('outputFile', outputFile)
            .end(function (err,res,req) {
                if (res) {
                    assert.equal(string, res.text);
                }
                done();
            });
    });
});