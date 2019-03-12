
require('./greet.js');

const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
  response.end(`handling a request on port ${port}`)
}

const server = http.createServer(requestHandler);

server.listen(port, (err) =>{
  if (err){
    return console.log(`you have an error ${err}`)
  }
  console.log(`server is listening on ${port}`)
})
