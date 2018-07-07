var db = require('../models');

module.exports = function(app){



  app.get('/saveGuy', function(req, res) {
    db.User.create({username: 'tom', email: 'tom@tom.com'}).then(function(thingWeSaves){
      console.log('this is the thing we saved!!!', thingWeSaves)
      res.json(thingWeSaves)
    })
  })

  app.get('/', function(req, res){
    res.send('html pages coming soon!!!');
  })
}