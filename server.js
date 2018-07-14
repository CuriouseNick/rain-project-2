
var express = require("express");
var bodyParser = require("body-parser");
// ******************************************************************************
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

require("./routes/apiRoutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// johnny five photo resistor
var five = require("johnny-five"),
board, photoresistor, temperature, led;

var light;
var temperature;
var locTemp;

board = new five.Board();

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  temperature = new five.Thermometer({
    controller: "LM35",
    pin: "A0",
    freq: 250
  });

  led = new five.Led(10);


  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    light = this.value;
    console.log(light);
  });

  temperature.on("data", function(){
    locTemp = this.fahrenheit;
    console.log(locTemp);
  });
});

app.get("/api/temp", function(req, res){
  res.json({"temperature": locTemp});
});

app.get("/api/light")


