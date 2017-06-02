var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Create Schema*/
var imgSchema = new Schema({
    displayName : String,
    path : String
});

/*Create Model*/
var imgModel = mongoose.model('Img', imgSchema);

/*Export this model*/
module.exports = imgModel;