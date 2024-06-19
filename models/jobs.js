const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    highlight: String,
    description: String, 
    link: String, 
    linkText: String,
    avgSalary: String,
    skillsRequired: String,
    marketDemand: String,
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
    collection: 'jobs'
});

module.exports = mongoose.model('Jobs',jobSchema);