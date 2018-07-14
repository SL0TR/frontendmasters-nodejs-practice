var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  console.log('Request was made from: ' + req.url);
  
  if (req.url === '/home' || req.url === '/' ) {

    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

  } else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var myObj = {
      name: 'Mohaimin',
      job: 'Full Stack Develioer ;)',
      age: 24
    }
    res.end(JSON.stringify(myObj)); 
  } else {
    res.end('such page does not exist');
  }
})

server.listen(3000, '127.0.0.1');
console.log('You are now listening to port 3000'); 