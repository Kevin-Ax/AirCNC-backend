const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://kevin:Senha@cluster0.78ymfh2.mongodb.net/AmorJS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(5000);