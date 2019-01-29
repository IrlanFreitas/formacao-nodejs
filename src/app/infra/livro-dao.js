class LivroDao {

    constructor(db) {
        this._db = db
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT * FROM livros`,
                (err, resultados) => {
                    if (err) return reject('Não foi possível listar os livros')

                    return resolve(resultados)
                })
        })
    }

    adiciona({titulo, preco, descricao}) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo, 
                    preco, 
                    descricao
                ) VALUES (?, ?, ?)`,
                [
                    titulo,
                    preco,
                    descricao
                ], 
                (err, resultados) => {
                    if (err) return reject('Não foi possível listar os livros')

                     resolve()
                }
            )
        })
    }


    atualiza({id, titulo, preco, descricao}) {
        return new Promise( (resolve, reject) => {
            this._db.run(
                `UPDATE livros
                SET titulo = ?, preco = ?, descricao = ?
                WHERE id = ? `, 
                [id, titulo, preco, descricao], 
                (err, resultados) => {
                if (err) return reject('Não foi possível atualizar o livro')

                 resolve()
            })
        })
    }

    remove(id) {
        return new Promise( (resolve, reject) => {
            this._db.run(
                " DELETE FROM livros WHERE id = ? ", 
                [id], 
                (err, resultados) => {
                if (err) return reject('Não foi possível deletar o livro')

                 resolve()
            })
        })
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`
                SELECT * FROM livros
                WHERE id = ?`,
                [id],
                (err, livro) => {
                    if(err) return reject(`Não foi possível encontrar o livro`)

                    resolve(livro)
                })
        })
    }
}

module.exports = LivroDao