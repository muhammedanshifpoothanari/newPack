const Courses = require('../../models/courses');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.find({ isBlocked: false });
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = {
    getAllCourses
}