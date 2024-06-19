const mongoose = require('mongoose');


const personaSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    assetId: String,
    isBlocked: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
}, {
    collection: 'personas'
});

module.exports = mongoose.model('Personas',personaSchema);