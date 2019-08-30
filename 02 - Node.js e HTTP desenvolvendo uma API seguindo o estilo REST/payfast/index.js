// Carregendo o arquivo com require e executando a função
let app = require("./config/custom-express.js")()

// Fazendo o servidor escutar a porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

