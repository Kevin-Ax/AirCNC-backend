
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    //Criação dos campos de dados que a entidade dentro do banco de dados.
    // em caso de ter mais campos:
    // name: String,
    // password: Number,
    // age: Number,
    image: String,
    company: String,
    price: Number,
    TI: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //tipo do dado registrado
        ref: 'User' //referencia do modoelo;
    }
});

module.exports = mongoose.model('Spot', SpotSchema);