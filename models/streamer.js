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
        },
        // streamer profile belongs to a user (user is referenced)
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    });

    module.exports = mongoose.model('Streamer', streamerSchema);  

















module.exports = mongoose.model('Streamer', streamerSchema);