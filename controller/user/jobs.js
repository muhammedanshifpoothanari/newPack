const Jobs = require('../../models/jobs');

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({ isBlocked: false });
        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = {
    getAllJobs
}