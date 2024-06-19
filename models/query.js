const mongoose = require('mongoose');



const querySchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    companyName: String,
    mobile: String,
    collageName: String,
    studentName: String,
    persona: String,
    status: {
        type: Boolean,
        default: true,
    },
    isFulfilled: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'query'
});

module.exports = mongoose.model('Query',querySchema);