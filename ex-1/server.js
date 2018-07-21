// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};


const express = require('express'),

app = express();


app.get('/', (req, res) => {
  console.log('Request was made from: ' + req.url);
  res.sendFile(__dirname + '/index.html', err => {
    if (err) {
      res.status(500).send.err
    }
  })
})

app.get('/data', (req, res) => {
  console.log('Request was made from: ' + req.url);
  res.json(jsonData)
})

//listen to port
const listener = app.listen(process.env.PORT || 1337, () => console.log(`Listening on port ${listener.address().port}`));