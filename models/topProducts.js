const mongoose = require('mongoose');


const topProductSchema = new mongoose.Schema({
    highlight: String,
    description: String, 
    link: String, 
    linkText: String,
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
    collection: 'topProducts'
});

module.exports = mongoose.model('TopProducts',topProductSchema);