var tigerRouter = require('express').Router();

var tigers = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

tigerRouter.param('id', function(req, res, next, id) {
  var todo = _.find(todos, {id: id});

  if (todo) {
    req.todo = todo;
    next();
  } else {
    res.send();
  }
});

tigerRouter.route('/')
  .get(function(req, res){
    res.json(tigers);
  })
  .post(updateId, function(req, res) {
    var tiger = req.body;
    tigers.push(tiger);
    res.json(tiger);
  });

tigerRouter.route('/:id')
  .get(function(req, res){
    var tiger = req.todo;
    res.json(tiger || {});
  })
  .put(function(req, res) {
    var update = req.body;
    if (update.id) {
      delete update.id
    }
  
    var tiger = _.findIndex(tigers, {id: req.params.id});
    if (!tigers[tiger]) {
      res.send();
    } else {
      var updatedtiger = _.assign(tigers[tiger], update);
      res.json(updatedtiger);
    }
  })
  .delete(function(req, res) {

    var lion = _.findIndex(lions, {id: req.params.id})
    if (!lions[lion]) {
      res.send()
    } else {
      var deletedLion = lions[lion]
      lions.splice(lion, 1)
      res.json(deletedLion)
    }
  
  })

module.exports = tigerRouter;
