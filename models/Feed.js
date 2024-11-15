const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15
    },
    message: {
        type: String,
        required: true,
        maxlength: 40   

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feed', feedSchema);