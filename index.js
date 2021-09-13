const http = require('http');
const fs = require('fs');
const paths = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/about') {
        fs.readFile(`./${req.url}.html`, (err, content) => {
            if(err) throw err;
            res.end(content);
        })
    }
    else if (req.url === '/') {
        fs.readFile(`./index.html`, (err, content) => {
            if(err) throw err;
            res.end(content);
        })
    }

    else if (req.url === '/contact-me') {
        fs.readFile(`./${req.url}.html`, (err, content) => {
            if(err) throw err;
            res.end(content);
        })
    }

    else {
        fs.readFile(`./404.html`, (err, content) => {
            if(err) throw err;
            res.end(content);
        })
    }
})

server.listen(3000, () => {
    console.log('Server is now Active');
})