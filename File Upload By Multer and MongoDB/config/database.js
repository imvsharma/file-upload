var mongoose = require('mongoose');
var property = require('./properties');
var chalk = require('chalk');
var success = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnect = chalk.bold.red;
var close = chalk.bold.magenta;
var dbURI = property.db;

// Setup database connection
module.exports= function(){

mongoose.connect(dbURI);

// Connection Events

// Connected Successfully
mongoose.connection.on('connected', function(){
    console.log(success("Mongoose default connection is open to ", dbURI));
});

// Thorws an error by connection
mongoose.connection.on('error', function(error){
    console.log(error("Mongoose default connection has occured error is ", error));
});

// Connection disconnected
mongoose.connection.on('disconnected', function(){
    console.log(disconnect("Mongoose default connection is disconnected"));
})

// If node process ends, close all mongoose connection 
process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log(close("Mongoose default connection is disconnected due to application termination"));
        process.exit(0);
    });
});

}



