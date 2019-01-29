// ! Imports necessário para o funcionamento do marko
require('marko/node-require').install()
require('marko/express')


const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// * Importando o middleware
// ! Para saber um pouco mais sobre middlewares:
// ! http://expressjs.com/pt-br/guide/using-middleware.html
// * Configurando o bodyParser para que seja 
// * possível receber objetos complexos, json
app.use(bodyParser.urlencoded({
    extended: true
}))

// * Importando as rodas 
const rotas = require(`../app/rotas/rotas`)

// * Passando parametros para outro arquivo
rotas(app)

// * Devolvendo o objeto criado 
// * para que possa ser reutilizado
// * na importação
module.exports = app