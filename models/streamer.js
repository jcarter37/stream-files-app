const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const streamerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        bio: {
            type: String
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
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    });

    module.exports = mongoose.model('Streamer', streamerSchema);  

















module.exports = mongoose.model('Streamer', streamerSchema);