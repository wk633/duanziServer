const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var duanziSchema = new Schema({
  duanziId:  String,
  duanziContent: String,
  commentLike:   Number,
  commentUnlike: Number
});
module.exports = mongoose.model('jandan', duanziSchema, 'jandan'); // (modelName, schema, collectionName)
