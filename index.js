const http = require('http');
const fs = require('fs');
const paths = require('path');

const server = http.createServer((req, res) => {

    let filePath = paths.join(
        __dirname,
        "source/",
         req.url == '/' ? 'index.html' : `${req.url}.html`);
    let contentType = 'text/html';

    if (paths.extname(req.url) == '.css') {
        filePath = paths.join(__dirname,'source/styles', 'style.css');
        contentType = 'text/css';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(paths.join(__dirname, 'source/', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': contentType});
                    res.end(content);
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content);
        }
    })
})

server.listen(3000, () => {
    console.log('Server is now Active');
})