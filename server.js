// Serve para importação de modulos node.js
const http = require('http')

// Método que vem do modulo para criação de
// servidor 
const server = http.createServer( (request, response) => {
    
    let html = ``

    if (request.url === `/`) {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
                <title>Overthiking Projects</title>
            </head>
            <body>
                <h1> Home </h1>
            </body>
        </html>
        `
    } else if (request.url === `/livros`) {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
                <title>Overthiking Projects</title>
            </head>
            <body>
                <h1> Livros </h1>
            </body>
        </html>
        `
    }

    // A função só será executada quando receber 
    // uma requisição
    response.end(html)
} )

// Setando a porta que o servidor
// ficará escudando para ser 
// executado.
// Porta padrão: 3000
server.listen(3000)

console.log("Servidor startado.")
