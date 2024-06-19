const TopProducts = require('../../models/topProducts');

const getAllTopProducts = async (req, res) => {
    try {
        const topProducts = await TopProducts.find({ isBlocked: false });
        res.json(topProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getTopProductsById = async (req, res) => {
    const topProductsId = req.params.topProductsId;
    try {
        const topProducts = await TopProducts.findById(topProductsId);
        if (!topProducts) {
            return res.status(404).json({ error: 'topProducts not found' });
        }
        res.json(topProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createTopProducts = async (req, res) => {
    const {
        assetId,
        highlight,
        description,
        link,
        linkText,
    }= req.body;
    try {
        const newTopProducts = new TopProducts({
            assetId,
            highlight,
            description,
            link,
            linkText
        });
        await newTopProducts.save();
        res.status(201).json({ topProducts: newTopProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTopProducts = async (req, res) => {
    const topProductsId = req.params.topProductId;
    const {
        assetId,
        highlight,
        description,
        link,
        linkText
    }= req.body;
    try {
        const topProducts = await TopProducts.findById(topProductsId);
        if (!topProducts) {
            return res.status(404).json({ error: 'topProducts not found' });
        }
        topProducts.assetId = assetId;
        topProducts.highlight = highlight;
        topProducts.description = description;
        topProducts.link = link;
        topProducts.linkText = linkText;
        
        await topProducts.save();
        res.json({ message: 'topProducts updated successfully', topProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const blockTopProducts = async (req, res) => {
    const topProductsId = req.params.topProductId;
    try {
        const topProducts = await TopProducts.findById(topProductsId);
        if (!topProducts) {
            return res.status(404).json({ error: 'topProducts not found' });
        }
        topProducts.isBlocked = true;
        await topProducts.save();
        res.json({ message: 'topProducts blocked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllTopProducts,
    getTopProductsById,
    createTopProducts, 
    updateTopProducts,
    blockTopProducts
};
