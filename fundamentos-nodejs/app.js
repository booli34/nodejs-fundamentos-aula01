var app = require("./config/server")

var rotaHome = require("./app/roules/home")
rotaHome(app)

var rotaFormInclusaoLivro = require("./app/roules/formulario_inclusao_livro")(app)

var rotaLivros = require("./app/roules/livros")(app)

app.listen(3000, function(){
    console.log("Servidor rodando com Express na porta 3000")
})