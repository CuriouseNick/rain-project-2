var db = require('../models');
var path = require('path');

module.exports = function(app){

  /* app.get('/saveGuy', function(req, res) {
    db.User.create({username: 'tom', email: 'tom@tom.com'}).then(function(thingWeSaves){
      console.log('this is the thing we saved!!!', thingWeSaves)
      res.json(thingWeSaves)
    })
  }) */

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));;
  })

  app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));;
  })
}