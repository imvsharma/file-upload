var multer = require('multer');
module.exports = function(multer){
    var storage = multer.diskStorage({
                destination : function(req, file, cb){
                            cb(null, './uploads');
                            },
                filename : function(req, file,cb){
                            cb(null, file.originalname);
                            }
                });
    return storage;
}