const Banners = require('../../models/Banners');

const getAllBanners = async (req, res) => {
    try {
        const banners = await Banners.find();
        res.json(banners);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = { 
    getAllBanners
};
