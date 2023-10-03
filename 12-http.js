const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('welcome to our home');
    return;
  }
  if (req.url == '/about') {
    res.end('here is our short history')
    return;
  }
  res.end(`<h1>opts</h1>`)
})

server.listen(5000, () => {
  console.log('start port 5000');
})