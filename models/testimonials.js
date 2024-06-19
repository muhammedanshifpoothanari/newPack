const mongoose = require('mongoose');


const testimonialSchema = new mongoose.Schema({
    description: String, 
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
    collection: 'testimonial'
});

module.exports = mongoose.model('Testimonials',testimonialSchema);