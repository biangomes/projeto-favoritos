const http = require('http')
const path = require('path')        // permite configurar o caminho dinamicamente
const fs = require('fs')            // permite trabalhar com arquivos


http.createServer((req, resp) => {

    // definindo rotas para a aplicação
    if (req.url === '/')
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err 
                    resp.end(content)
        })
    if (req.url === '/contato') {
        resp.end("<h1>contact</h1>")
    }
}).listen(5000, () => {
    console.log("testando texto no console da aplicação ... ")
});