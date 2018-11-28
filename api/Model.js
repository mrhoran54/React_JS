// contactModel.js
var mongoose = require('mongoose');

// Setup schema for the API
// we only really want the this and that values. don't need any more info

var thisForThat = mongoose.Schema({
    this: {
        type: String,
        required: true
    },
    that: {
        type: String,
        required: true
    }
});

// Export model
var x = module.exports = mongoose.model('thisforthat', thisForThat);

// our ger call
module.exports.get = function (callback, limit) {
    x.find(callback).limit(limit);
}