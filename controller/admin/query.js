const Query = require('../../models/query');

const getAllQuerys = async (req, res) => {
    try {
        const querys = await Query.find();
        res.json(querys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const getqueryById = async (req, res) => {
    const queryId = req.params.queryId;
    try {
        const query = await Query.findById(queryId);
        if (!query) {
            return res.status(404).json({ error: 'query not found' });
        }
        res.json(query);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const countTotalQuerysPerMonth = async (req, res) => {
    const month = req.params.month; 
    try {
        const totalQuerys = await Query.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(new Date().getFullYear(), month - 1, 1),
                        $lt: new Date(new Date().getFullYear(), month, 0) 
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$total' }
                }
            }
        ]);
        res.status(200).send(totalQuerys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const countTotalQuerysPerYear = async (req, res) => {
    const year = req.params.year; 
    try {
        const totalQuerys = await Query.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(year, 0, 1),
                        $lt: new Date(year, 12, 0) 
                    },
                    isDelivered: true
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$total' }
                }
            }
        ]);
        res.json(totalQuerys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getAllRecentQuerys = async (req, res) =>{
    try {
        const querys = await Query.find().sort({ createdAt: -1 }).limit(15); 
        res.json(querys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deliveredquery = async (req, res) => {
    console.log('vffdfds');
    const queryId = req.body.id;
    console.log(req.body,'vffdfds');
    try {
        const query = await Query.findById(queryId);
        if (!query) {
            return res.status(404).json({ error: 'User not found' });
        }
        query.isFulfilled = req.body.isFulfilled;
        await query.save();
        res.json({ message: 'query delivered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getAllQuerys,
    getqueryById,
    countTotalQuerysPerMonth,
    countTotalQuerysPerYear,
    getAllRecentQuerys,
    deliveredquery
};
