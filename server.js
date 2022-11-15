const http = require('http')
const path = require('path')        // permite configurar o caminho dinamicamente
const fs = require('fs')            // permite trabalhar com arquivos


http.createServer((req, resp) => {


    const fileHtml = req.url === '/' ? 'index.html' : req.url
    // substitui o path.join(...)
    const filePath = path.join(__dirname, 'public', fileHtml)
  
    /*
    //pegando a extensãp do documento
    const extName = path.extname(filePath)

    //criando um vetor com as extensões permitidas
    const allowedFileTypes = ['.html', '.css', '.js']

    const allowed = allowedFileTypes.find(
        (item) => item === extName
    )

    if (!allowed) return 
*/

    // definindo rotas para a aplicação
    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err 
                resp.end(content)
    })}).listen(5000, () => {console.log("testando texto no console da aplicação ... ")});