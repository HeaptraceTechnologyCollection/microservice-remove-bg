var fs = require('fs');
var request = require('request');
var SERVER_URL = "http://localhost:3000/remove-bg";

describe('remove-bg', function (req, res) {
    it('Remove image background', function (done) {
        var localfile = `${__dirname}/image/image.jpeg`
        var base64imageData = fs.readFileSync(localfile, { encoding: "base64" });
        
        request.post({
            url: SERVER_URL,
            body: "{\"base64content\":\""+ base64imageData+"\"}"
        }, function (error, response, body) {
            assert.notEqual(response.body.text, null);
        });
        done();
    });


    it('Provide data', function (done) {
        
        request.post({
            url: SERVER_URL
            
        }, function (error, response, body) {
            assert.notEqual(response.body.text, "Image base64 data not found");
        });
        done();
    });

   
});
