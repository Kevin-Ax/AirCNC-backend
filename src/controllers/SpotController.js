const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res){
        const { TI } = req.query;
        const spot = await Spot.find({ TI });
        return res.json(spot);
    },

    async store (req, res){
        const { filename } = req.file;
        const { company, price, TI } = req.body;
        const { user_id } = req.headers;
        const realUser = await User.findById(user_id);

        if(!realUser){
            return res.status(400).json({error: "Usuário "});
        }

        const spot = await Spot.create({
            user: user_id,
            image: filename,
            company,
            price,
            TI: TI.split(',').map(ti => ti.trim())
        });
        return res.json(spot);
    }
}