const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const streamerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        content: {
            type: String,
            required: true
        },
        platform: {
            type: String,
            required: true
        },
        profileImg: {
            type: String
        }
    });

    module.exports = mongoose.model('Streamer', streamerSchema);  

















module.exports = mongoose.model('Streamer', streamerSchema);