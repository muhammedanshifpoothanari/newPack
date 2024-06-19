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


module.exports = {
    getAllTestimonials
};
