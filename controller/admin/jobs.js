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

const getJobsById = async (req, res) => {
    const jobsId = req.params.jobsId;
    try {
        const jobs = await Jobs.findById(jobsId);
        if (!jobs) {
            return res.status(404).json({ error: 'jobs not found' });
        }
        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createJobs = async (req, res) => {
    const {
        assetId,
        highlight,
        description,
        link,
        linkText,
        persona,
        avgSalary,
        skillsRequired,
        marketDemand
    } = req.body;
    try {
        const newJobs = new Jobs({
            assetId,
            highlight,
            description,
            link,
            linkText,
            persona,
            avgSalary,
            skillsRequired,
            marketDemand
        });
        await newJobs.save();
        res.status(201).json({ jobs: newJobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateJobs = async (req, res) => {
    const jobsId = req.params.jobsId;
    const {
        assetId,
        highlight,
        description,
        link,
        linkText,
        persona,
        avgSalary,
        skillsRequired,
        marketDemand
    } = req.body;
    try {
        const jobs = await Jobs.findById(jobsId);
        if (!jobs) {
            return res.status(404).json({ error: 'jobs not found' });
        }
        jobs.assetId = assetId;
        jobs.highlight = highlight;
        jobs.description = description;
        jobs.link = link;
        jobs.persona = persona;
        jobs.linkText = linkText;
        jobs.avgSalary = avgSalary;
        jobs.skillsRequired = skillsRequired;
        jobs.marketDemand = marketDemand;
        
        await jobs.save();
        res.json({ message: 'jobs updated successfully', jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const blockJobs = async (req, res) => {
    const jobsId = req.params.jobsId;
    try {
        const jobs = await Jobs.findById(jobsId);
        if (!jobs) {
            return res.status(404).json({ error: 'jobs not found' });
        }
        jobs.isBlocked = true;
        await jobs.save();
        res.json({ message: 'jobs blocked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllJobs,
    getJobsById,
    createJobs,
    updateJobs,
    blockJobs
};
