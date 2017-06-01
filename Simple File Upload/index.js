var express = require('express');
var multer = require("multer");
var config = require('./config/properties');
var route = require('./routes/routes');
var port = config.port;
var app = express();
route(app);
app.listen(port, function(){
    console.log("Server is running on ",port);
});