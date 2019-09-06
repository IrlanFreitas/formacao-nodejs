class PagamentoDao {

    // ! Ir no banco de dados e criar o banco com o script abaixo
    // ! Script de criação do banco 
    /* 
    CREATE TABLE `pagamentos` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
       `forma_de_pagamento` varchar(255) NOT NULL,
       `valor` decimal(10,2) NOT NULL,
       `moeda` varchar(3) NOT NULL,
       `status` varchar(255) NOT NULL,
       `data` DATE,
       `descricao` text,
        PRIMARY KEY (id)
    ); */

    constructor(connection) {
        this._connection = connection
    }

    salvar(pagamento, callback) {
        this._connection.query("INSERT INTO pagamentos SET ?", pagamento, callback)
    }
    
    listar(callback) {
        this._connection.query("SELECT * FROM pagamentos  ", callback)
    }
    
    buscarPorId (id, callback) {
        this._connection.query("SELECT * FROM pagamentos WHERE id = ? ", [id], callback)
    }

}

module.exports = function(){
    return PagamentoDao;
};