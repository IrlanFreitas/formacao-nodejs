// ! Imports necessário para o funcionamento do marko
require('marko/node-require').install()
require('marko/express')


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// * Encontrando os arquivos com o middleware
app.use(`/estatico`, express.static(`src/app/public`))


// * Importando o middleware
// ! Para saber um pouco mais sobre middlewares:
// ! http://expressjs.com/pt-br/guide/using-middleware.html
// * Configurando o bodyParser para que seja 
// * possível receber objetos complexos, json
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

// * Importando as rodas 
const rotas = require(`../app/rotas/rotas`)

// * Passando parametros para outro arquivo
rotas(app)

// * Devolvendo o objeto criado 
// * para que possa ser reutilizado
// * na importação
module.exports = app