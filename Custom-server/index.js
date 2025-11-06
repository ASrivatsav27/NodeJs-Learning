const http = require('node:http');

const server = http.createServer(function (req, res) {
  console.log(`Incoming request at [${Date.now()}]`);
  console.log(req.url);
      
    
    switch (req.url) {
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`);
            break
        case '/contact-us':
            res.writeHead(200);
            return res.end('Contact me at srivatsava47@gmail.com');
        case '/about':
            res.writeHead(200);
            return res.end('I am a software engineer')
        default:
            res.writeHead(404);
            res.end('You are lost')
}
 
 
});

server.listen(8000, () => {
  console.log(`Server is running on PORT: 8000`);
});
