'use strict'
/*

npm install express --save
npm install serve-favicon --save
*/
var path = require("path");
var fs = require("fs");

var favicon = require('serve-favicon');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'))
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

server.listen(80);
console.log('http server now listening on port 80')
