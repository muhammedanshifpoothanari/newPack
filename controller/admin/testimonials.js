const Testimonials = require('../../models/testimonials');

const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonials.find({ isBlocked: false });
        res.json(testimonials);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getTestimonialsById = async (req, res) => {
    const testimonialId = req.params.testimonialId;
    try {
        const testimonials = await Testimonials.findById(testimonialId);
        if (!testimonials) {
            return res.status(404).json({ error: 'testimonials not found' });
        }
        res.json(testimonials);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createTestimonials = async (req, res) => {
    const {
        assetId,
        description,
    } = req.body;
    try {
        const newtestimonials = new Testimonials({
            assetId,
            description,
        });
        await newtestimonials.save();
        res.status(201).json({ testimonials: newtestimonials });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTestimonials = async (req, res) => {
    const testimonialId = req.params.testimonialId;
    const {
        assetId,
        description,
    } = req.body;
    try {
        const testimonials = await Testimonials.findById(testimonialId);
        if (!testimonials) {
            return res.status(404).json({ error: 'courtestimonialsse not found' });
        }
        testimonials.assetId = assetId;
        testimonials.description = description;
     
        await testimonials.save();
        res.json({ message: 'course updated successfully', testimonials });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const blockTestimonials = async (req, res) => {
    const testimonialId = req.params.testimonialId;
    try {
        const testimonials = await Testimonials.findById(testimonialId);
        if (!testimonials) {
            return res.status(404).json({ error: 'testimonials not found' });
        }
        testimonials.isBlocked = true;
        await testimonials.save();
        res.json({ message: 'testimonials blocked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllTestimonials,
    getTestimonialsById,
    createTestimonials,
    updateTestimonials,
    blockTestimonials
};
