const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
*
* MÉTODOS HTTP:
*
* get:    buscar infos do backend
* post:   criar nova info no backend
* put:    alterar info no backend
* delete: deletar info do backend
*
**/

/**
*
* TIPOS DE PARÂMETROS
*
* query: parâmetros nomeados enviados na rota, após "?" (filtros, paginação...)
* route params: parâmetros utilizados para identificar recursos
* request body: corpo da requisição. utilizado para criar ou alterar recursos
*
**/