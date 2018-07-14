var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile/:name', (req, res) => {
  var data = {
    age: 24,
    job: 'Cyborg Ninja',
    hobbies: ['eating', 'fighting', 'kicking ass']
  }
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);