const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    highlight: String,
    description: String, 
    link: String, 
    linkText: String,
    assetId: String,
    persona: String,
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
    collection: 'courses'
});

module.exports = mongoose.model('Courses',courseSchema);