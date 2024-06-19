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

const getCourseById = async (req, res) => {
    const courseId = req.params.coursesId;
    try {
        const course = await Courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'course not found' });
        }
        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createCourses = async (req, res) => {
    const {
        assetId,
        highlight,
        description,
        link,
        linkText,
        persona
    }= req.body;
    try {
        const newCourse = new Courses({
            assetId,
            highlight,
            description,
            link,
            linkText,
            persona
        });
        await newCourse.save();
        res.status(201).json({ course: newCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateCourses = async (req, res) => {
    const courseId = req.params.coursesId;
    const {
        assetId,
        highlight,
        description,
        link,
        linkText,
        persona
    }= req.body;
    try {
        const course = await Courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'course not found' });
        }
        course.assetId = assetId;
        course.highlight = highlight;
        course.description = description;
        course.link = link;
        course.persona = persona;
        course.linkText = linkText;
        
        await course.save();
        res.json({ message: 'course updated successfully', course });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const blockCourses = async (req, res) => {
    const courseId = req.params.coursesId;
    try {
        const course = await Courses.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'course not found' });
        }
        course.isBlocked = true;
        await course.save();
        res.json({ message: 'course blocked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourses,
    updateCourses,
    blockCourses
};
