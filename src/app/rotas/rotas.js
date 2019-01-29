// * Obtendo a instância do banco de dados
const db = require('../../config/database')
const LivroDao = require('../infra/livro-dao')

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
    `)
    })

    app.get(`/livros`, (req, resp) => {

        const livroDao = new LivroDao(db)

        livroDao.lista()
            .then(livros => {
                resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    { livros: livros })
            })
            .catch(err => console.log(err))


        // ! Código melhorado com Promises
        // livroDao.lista( (err, results) => {
        //     // * Método habilitado depois da importação do marko no custom-express.js
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         { livros: results } )
        // })

        // ! Código melhorado com o padrão DAO
        // * Fazendo consultas no sqlite
        // db.all(`SELECT * FROM livros`, (err, results) => {
        //     // * Método habilitado depois da importação do marko no custom-express.js
        //      resp.marko(
        //         require('../views/livros/lista/lista.marko'),
        //         {
        //             livros: results
        //         }
        //     )
        // })
    })

    app.get(`/livros/form`, (req, resp) => {
        resp.marko( require('../views/livros/form/form.marko') )
    })

    app.post(`/livros`, (req, resp) => {

        console.log(req.body);

        const livroDao = new LivroDao(db)

        livroDao.adiciona(req.body)
            .then( resp.redirect(`/livros`) )
            .catch(err => console.log(err))
        
    })

    
}


