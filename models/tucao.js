const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tucaoSchema  = new Schema({
    duanziId: {type: String, index: true},
    tucao: Array
})
module.exports = mongoose.model('tucao', tucaoSchema, 'tucao'); // (modelName, schema, collectionName)
