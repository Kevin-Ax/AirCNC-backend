const Spot = require('../models/Spot')

module.exports = {
    async show(req, res){
        const { use_id } = req.headers;
        const spots = await Spot.find({ user: use_id });
        return res.json(spots);
    }
};