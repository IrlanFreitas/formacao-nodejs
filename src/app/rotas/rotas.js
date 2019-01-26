
// * Exportando uma função que recebe parametros
// * para ser utilizado na custom-express.js

module.exports = (app) => {

    // * Indicando que quando receber 
    // * requisição do tipo Get, no caminho /
    // * será tratado
    app.get(`/`, (req, resp) => {
        resp.send(`
    <html>
        <head>
            <meta charset="utf-8">
            <title>Overthiking Projects</title>
        </head>
        <body>
            <h1> Home </h1>
        </body>
    </html>
    `)})

    app.get(`/livros`, (req, resp) => {
        // * Método habilitado depois da importação do marko no custom-express.js
        resp.marko(
            require('../views/livros/lista/lista.marko'), 
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        )})
}


