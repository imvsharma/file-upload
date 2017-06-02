var express = require('express');
var router = express.Router();
var multer = require('multer');
var fileUpload = require('../../utilities/fileupload')(multer);
var Img = require('../models/imgModel');

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

            var displayName = req.file.originalname
            var originalname = req.file.originalname;
            originalname = originalname.slice(0,originalname.length-4);

            var newimg = new Img({
                displayName: originalname,
                path : './uploads/'+displayName
            }).save(function(err,img){
                if(err){
                    throw err;
                }
                if(img){
                    console.log("img",img);
                    res.json(img);
                }
            });

        })
    } );  
};