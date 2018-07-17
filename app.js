var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  // console.log(req.query);
  res.render('index', {qs: req.query});
});

app.post('/', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('index', {qs: req.query});
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