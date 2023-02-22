const mongoose = require('mongoose');

const ReserveSchema = new mongoose.Schema({
    date: String,
    aproved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Reserve', ReserveSchema);