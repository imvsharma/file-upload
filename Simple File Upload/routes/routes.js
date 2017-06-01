var express = require('express');
var router = express.Router();
var multer = require('multer');
var fileUpload = require('../utilities/fileupload')(multer);

module.exports = function(router){
    router.get('/', function(req, res){
        res.send({message : "Welcome to File Upload"});
    });
    router.post('/upload', function(req, res){
        var upload =  multer({storage: fileUpload}).single('displayImage');
        upload(req, res, function(err){
            if(err){
                res.send({message : "File not uploaded"});
            }
            console.log(req.file);
            res.send({message : "File successfully uploaded"});
        })
    } );  
};