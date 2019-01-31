const express = require('express')
const consign = require('consign')
const pagamentos = require('../controllers/pagamentos')

module.exports = () => {
    const app = express()
    // * Pacote que ajuda no mapeamento das rotas somente
    // * com indicação de pasta
    // ! necessário saber como funciona as configs disso.
    consign()
        .include('src/controllers')
        .into(app)
    
    return app
}