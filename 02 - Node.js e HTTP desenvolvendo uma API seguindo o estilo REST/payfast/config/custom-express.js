// * Quando se é utilizado o require
// * somente o arquivo é carregado
let express = require('express')
let consign = require('consign')
let bodyParser = require('body-parser')

module.exports = () => {

    // ? Carrengado o express
    let app = express()

    // * Utilizando um middleware para que o express entenda Json
    app.use(bodyParser.json())
    // * 
    app.use(bodyParser.urlencoded({ extended: true }))

    // Incluindo a pasta com as rotas para que o express consiga mapear
    consign()
        .include("controllers")
        .then("persistencia")
        .into(app)

    return app
}