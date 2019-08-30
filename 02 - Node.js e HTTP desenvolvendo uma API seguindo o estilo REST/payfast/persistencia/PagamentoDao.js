class PagamentoDao {

    constructor(connection) {
        this._connection = connection
    }

    salvar(pagamento, callback) {
        this._connection.query("INSERT INTO pagamentos SET ?", pagamento, callback)
    }
    
    listar(callback) {
        this._connection.query("SELECT * FROM pagamentos", callback)
        
    }
    
    buscarPorId (callback) {
        this._connection.query("SELECT * FROM pagamentos WHERE id = ?")

    }

}