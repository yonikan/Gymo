const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    data: {type: Schema.Types.ObjectId, ref: 'Widget'}
});

module.exports = mongoose.model('Widget', schema);