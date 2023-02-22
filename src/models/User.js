
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //Criação dos campos de dados que a entidade dentro do banco de dados.
    email: String,
    // em caso de ter mais campos:
    // name: String,
    // password: Number,
    // age: Number,
});

module.exports = mongoose.model('User', UserSchema);