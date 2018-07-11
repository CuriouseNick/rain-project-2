//pubnub chart

/* var pubnub = PUBNUB.init({
  publish_key: 'pub-c-502ba2b2-a64f-41f7-9607-2c6b371f0460',
  subscribe_key: 'sub-c-fb9f7ab4-83d1-11e8-b9aa-969f058f0c4c'
});

var channel = 'Channel-60cjd1c0y';

eon.chart({
  channel: channel,
  generate: {
    bindto: '#temp',
    data: {
      type: 'line',
      colors: {
        temperature: '#663399'
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%H:%m:%S',
          fit: true
        },
        label: {
          text: 'Time',
        }
      },
      y: {
        label: {
          text: 'Celsius',
          position: 'outer-middle'
        },
        tick: {
          format: function (d) {
            var df = Number( d3.format('.2f')(d) );
            return df;
          }
        }
      }
    }
  },
  pubnub: pubnub,
  limit: 30,
  transform: function(m) {
    return { eon: {
      temperature: m.eon.temperature
    }}
  }
}); */

/* var pubnub = require('pubnub')({
  publish_key: 'pub-c-502ba2b2-a64f-41f7-9607-2c6b371f0460',
  subscribe_key: 'sub-c-fb9f7ab4-83d1-11e8-b9aa-969f058f0c4c'
});

var channel = 'Channel-60cjd1c0y';

var temp = 0;

function publish() {
  var data = { eon: {
    'temperature': temp,
  }};
  pubnub.publish({
    channel: channel,
    message: data,
  });
}

// Johnny-Five 
// Using a temperature sensor, type LM35

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
 var temperature = new five.Thermometer({
   controller: "LM35",
   pin: "A0"
 });

 //Temperature data control block
 temperature.on("change", function() {
 //console.log(this.celsius + "°C", this.fahrenheit + "°F");
 });

  setInterval(publish, 3000);
}); */
