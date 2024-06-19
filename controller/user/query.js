const Query = require('../../models/query');


const createQuery = async (req, res) => {
    const {
        name,
        email,
        message,
        companyName,
        mobile,
        collageName,
        studentName,
        persona
    } = req.body;

    try {
        const newQuery = new Query({
            name,
            email,
            message,
            companyName,
            mobile,
            collageName,
            studentName,
            persona
        });

        await newQuery.save();

        res.status(201).json({ query: newQuery });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { 
    createQuery
};
