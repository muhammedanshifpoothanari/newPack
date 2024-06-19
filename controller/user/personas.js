const Personas = require('../../models/personas');

const getAllPersonas = async (req, res) => {
    try {
        const personas = await Personas.find();
        res.json(personas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



module.exports = {
    getAllPersonas
}