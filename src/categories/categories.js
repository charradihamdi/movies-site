const mongoose = require('mongoose');
const movies = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        required: true,
        trim: true,
        type: String
    },
    categorie: {
        required: true,
        trim: true,
        type: String
    },
    type: {
        required: true,
        trim: true,
        type: String
    },
    saison: {
        required: false,
        type: Number,
        trim: true
    },
    episode: {
        required: false,
        type: Number,
        trim: true
    },
    dateSortie: {
        required: true,
        type: Date,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('movies', movies);