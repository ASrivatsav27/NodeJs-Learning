const http = require('node:http');
const fs = require('node:fs')
const server = http.createServer(function (req, res) {
  console.log('I got an incoming request');
    const method = req.method;
    const path = req.url;
     
    const log = `\n[${Date.now()}]: ${method} ${path}`// any time POST request is made file is created
    fs.appendFileSync('log.txt',log,'utf-8')
    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    return res.writeHead(200).end("Hello from the server :)")
                case '/contact-us':
                    return res.writeHead(200).end("Email: srivatsava47@gmail.com,Phone: 9999999")
                case '/tweet':
                    return res.writeHead(200).end('Tweet1\nTweet2')
            }
        }
            break
        case 'POST': {

            switch (path) {
                case "/tweet":
                    return res.writeHead(201).end("Your tweet was created")
            }





        }
    }
    return res.writeHead(400).end('Your lost')
});

server.listen(8000, () => {
  console.log('Server is running on PORT 8000');
});
