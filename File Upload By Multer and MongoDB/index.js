var express = require('express');
var multer = require("multer");
var mongoose = require('mongoose');
var config = require('./config/properties');
var route = require('./server/routes/routes');

var port = config.port;
var app = express();
require('./config/database')();
route(app);
app.listen(port, function(){
    console.log("Server is running on ",port);
});