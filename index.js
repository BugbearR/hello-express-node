var http = require('http');

var express = require('express');
var app = express();

var port = 8080;
var options = {

};

var server = http.createServer(options, app);

app.get("/hello", function (req, res) {
    res.status(200);
    res.set("Content-Type", "text/plain");
    res.send("Hello, world!");
    res.end();
});

app.use(express.static("public"));

server.listen(port);
