// * Serve para importação de modulos node.js nesse caso o http
const http = require('http')

const app =  require('./src/config/custom-express')

/* 
 * Explicação rápida do que é o express
 * links:
 * https://pt.stackoverflow.com/questions/149296/pra-que-server-o-expressjs
 * https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o
*/
app.listen(3000, (req, resp) => {
    console.log(`Servidor rodando na porta 3000`);
})

// ! Modificado para o uso do express
// * Método que vem do modulo para criação de
// * servidor 
//  const server = http.createServer( (request, response) => { 
//     let html = ``
//     if (request.url === `/`) {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//                 <title>Overthiking Projects</title>
//             </head>
//             <body>
//                 <h1> Home </h1>
//             </body>
//         </html>
//         `
//     } else if (request.url === `/livros`) {
//         html = `
//         <html>
//             <head>
//                 <meta charset="utf-8">
//                 <title>Overthiking Projects</title>
//             </head>
//             <body>
//                 <h1> Livros </h1>
//             </body>
//         </html>
//         `
//     }

// * A função só será executada quando receber 
// * uma requisição
//     response.end(html)
// } )

// * Setando a porta que o servidor
// * ficará escudando para ser executado.
// * Porta padrão: 3000
// server.listen(3000)

// console.log("Servidor startado.")
