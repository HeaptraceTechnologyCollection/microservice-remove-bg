"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
app.use(bodyParser.json());
var remove_bg = require("remove.bg");


app.post('/remove-bg', function (req, res) {
    if (req.body.base64content == undefined) {
        return res.end("Image base64 data not found",req.body.base64imageData);
    }

    var apiKey = process.env.API_KEY;
    if (apiKey == undefined) {
        return res.end("Please provide API Key");
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
        res.end(base64imgoutput);
    })["catch"](function (errors) {
        res.end(JSON.stringify(errors))
        return res.end("Error : ", errors);
    });
});

app.listen(3000, function () {
    console.log("Working on port 3000");
});
