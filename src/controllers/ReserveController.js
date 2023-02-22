const Reserve = require('../models/Reserve');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { id } = req.params;
        const { date } = req.body;
        const reserve = await Reserve.create({
            user: user_id,
            spot: id,
            date
        });

        await reserve.populate('spot');
        await reserve.populate('user');

        return res.json(reserve);
    }
}