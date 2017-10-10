const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    type: {type: String, required: true},
    text: {type: Schema.Types.ObjectId, ref: 'Notification'}
});

module.exports = mongoose.model('Notification', schema);