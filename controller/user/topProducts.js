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

module.exports = {
    getAllTopProducts
};
