module.exports = (app)  =>{

    app.get(`/pagamentos`, (req, resp) => {
        console.log("Recebida requisição de pagamentos.");
        resp.end("OK")
    })

    app.get(`/pagamentos/teste`, (req, resp) => {
        console.log("Recebida requisição de pagamentos.");
        resp.end("OK")
    })

}