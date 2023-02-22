//imports de bibliotecas e configs....
const express = require('express');
const multer = require('multer');
const UploadCOnfig = require('./config/upload');

//controllers da aplicação
const SectionController = require('./controllers/SectionController');
const SpotController = require('./controllers/SpotController');
const ProfileCOntroller = require('./controllers/ProfileCOntroller');
const ReserveController = require('./controllers/ReserveController');

//variáveis de rotas e afins
const routes = express.Router();
const upload = multer(UploadCOnfig);

//métodos = GET POST PUT DELETE<
//req.query = pega informações do querry params
//req.params = acessar route params *(usado para identificação internae filtros)
//req.body = acessar corpo da requisição;

//rotas....

//Seção - Login
routes.post('/sections', SectionController.store);

//Rotas de spots - Listagens e cadastro
routes.post('/spots', upload.single('image'), SpotController.store);
routes.get('/spots', SpotController.index);

//Rota de listagem de spots de usuário
routes.get('/profile', ProfileCOntroller.show);

//Rota de criação de reserva
routes.post('/spot/:id/reserves', ReserveController.store);

module.exports = routes;