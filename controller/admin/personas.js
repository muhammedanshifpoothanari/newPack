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

const createPersonas = async (req, res) => {
    const { name } = req.body;
    try {
        const newPersonas = new Personas({
            name
        });
        await newPersonas.save();
        res.status(201).json({ personas: newPersonas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updatePersonas = async (req, res) => {
    const PersonasId = req.params.PersonasId;
    const { name, isBlocked } = req.body;
    try {
        const personas = await Personas.findById(PersonasId);
        if (!personas) {
            return res.status(404).json({ error: 'Personas not found' });
        }
        if(isBlocked) personas.isBlocked = isBlocked;
        personas.name = name;
        // Personas.assetId = assetId;
        personas.updatedAt = Date.now();
        await personas.save();
        res.json({ message: 'Personas updated successfully', personas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const blockPersonas = async (req, res) => {
    const PersonasId = req.params.PersonasId;
    try {
        const personas = await Personas.findById(PersonasId);
        if (!personas) {
            return res.status(404).json({ error: 'Personas not found' });
        }
        personas.isBlocked = true;
        await personas.save();
        res.json({ message: 'Personas blocked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllPersonas,
    createPersonas,
    updatePersonas,
    blockPersonas
};
