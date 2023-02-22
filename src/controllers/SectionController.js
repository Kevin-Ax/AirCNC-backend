const User = require('../models/User')

// index = retorna uma listagem de vários objetos
// show = mostrar um objeto individualmente;
// store = criar um novo objeto;
// update = atualizar ou editar um objeto;
// destroy = deletar  um objeto;

module.exports = {
    //criação de usuários no nosso banco de dados: 
    async store(req, res){
        const { email } = req.body;
        let user = await User.findOne({ email: email });
        if(!user){
            user = await User.create({ email: email });
        }
        return res.json(user);
    }
};