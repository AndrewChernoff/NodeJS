const http = require("http");
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; utf-8'
    })
    
    if(req.url === '/') {
      fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', function(err, content) {
        if(err) throw err;
        res.end(content)
      })
    } else if (req.url === '/about') {
      fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf8', function(err, content) {
        if(err) throw err;
        res.end(content)
      })
    }

  } else if (req.method = 'POST') {
    const body = [];
    res.writeHead(200, {
      'Content-Type': 'text/html; utf-8'
    })

    req.on('data', (data) => {
      body.push(Buffer.from(data));
    }) 

    req.on('end', () => {
      res.end(`
      <div>${body}</div>
      `)
    })
  }
})

server.listen(3000);