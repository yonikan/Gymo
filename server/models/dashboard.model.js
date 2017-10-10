const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    name: {type: String, required: true},
    widgets: {type: Schema.Types.ObjectId, ref: 'Dashboard'}
});

module.exports = mongoose.model('Dashboard', schema);