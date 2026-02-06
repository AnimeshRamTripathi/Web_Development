// const { createServer } = require('node:http');
const http= require('node:http');

const hostname = '127.0.0.1';
const port = 3003;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end('<h1> PRANAAM BHAIYAA</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
