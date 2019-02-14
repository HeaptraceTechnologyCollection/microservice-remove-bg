"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
app.use(bodyParser.json());
var remove_bg = require("remove.bg");
var HttpStatus = require('http-status-codes');

var message = {
    success: "false",
  };

app.post('/remove-bg', function (req, res) {
    if (req.body.base64content == undefined) {
        message.error = "Image base64 data not found";
        return res.status(HttpStatus.BAD_REQUEST).send(message);
    }

    var apiKey = process.env.API_KEY;
    if (apiKey == undefined) {
        message.error = "Please provide API Key";
        return res.status(HttpStatus.BAD_REQUEST).send(message);
    }
    
    var base64img = req.body.base64content;
    var outputFile = `${__dirname}/outfile.png`;

    remove_bg.removeBackgroundFromImageBase64({
        base64img,
        apiKey,
        size: "regular",
        outputFile: outputFile
    }).then(function (result) {
        var base64imgoutput = fs.readFileSync(outputFile, { encoding: "base64" });
        return res.status(HttpStatus.OK).send(base64imgoutput);
    })["catch"](function (error) {
         message.error = error;
         return res.status(HttpStatus.BAD_REQUEST).send(message);
    });
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
