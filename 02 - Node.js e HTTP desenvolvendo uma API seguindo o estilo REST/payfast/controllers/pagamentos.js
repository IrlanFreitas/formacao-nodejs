// Fazendo com que o arquivo pagamentos
// receba como função o app

module.exports = (app) => {

    app.get("/pagamentos", (req, res) => {
        console.log("Recebido a requisição de teste.");
        res.send("OK")
    })

    app.post("/pagamentos/pagamento", (req, res) => {
        let pagamento = req.body
        console.log("Processando uma requisição de um novo pagamento");

        pagamento.status = "CRIADO"
        pagamento.data = new Date()

        let connection = app.persistencia.connectionFactory()
        let pagamentoDao = new app.persistencia.PagamentoDao(connection)

        pagamentoDao.salvar(pagamento, () => {})
        



        res.send(pagamento)
    })

}
