// ! Poderia ser feito dessa forma
// const express = require('./src/config/custom-express')
// const app = express()

// * Aqui é carregado o arquivo e invocado
const app = require('./src/config/custom-express')()

app.listen(3000, (req, resp) => {
    console.log("Startado - Servidor rodando na porta 3000.");
})