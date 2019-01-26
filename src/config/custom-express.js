// ! Imports necessário para o funcionamento do marko
require('marko/node-require').install()
require('marko/express')

const express = require('express')
const app = express()

// * Importando as rodas 
const rotas = require(`../app/rotas/rotas`)

// * Passando parametros para outro arquivo
rotas(app)

// * Devolvendo o objeto criado 
// * para que possa ser reutilizado
// * na importação
module.exports = app