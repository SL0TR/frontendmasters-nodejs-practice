var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writedme.txt');

myReadStream.on('data', (chunk) => {
  console.log('new chunk recieved:');
  myWriteStream.write(chunk);
});
