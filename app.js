var fs = require('fs');

fs.readFile('readme.txt', 'utf8', (err, data) => {
  fs.writeFileSync('writeme.txt', data);
});

console.log('This text will execute nonetheless');
