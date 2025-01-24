const { Schema, model } = require("mongoose");

const mediaSchema = new Schema({
    artistName: {
        type: String
    },
    trackName: {
        type: String,
    },
    kind: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    collectionUrl: {
        type: String,
    },
});

const Media = model("Media", mediaSchema);

module.exports = Media