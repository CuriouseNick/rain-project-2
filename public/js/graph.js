//pubnub chart

/* var pubnub = PUBNUB.init({
  publish_key: 'pub-c-502ba2b2-a64f-41f7-9607-2c6b371f0460',
  subscribe_key: 'sub-c-fb9f7ab4-83d1-11e8-b9aa-969f058f0c4c'
}); */

// Temperature graph code goes here
var pubnub = new PubNub({
  publishKey: 'demo',
  subscribeKey: 'demo'
});

eon.chart({
  channels: ['eon-spline'],
  history: true,
  flow: true,
  pubnub: pubnub,
  generate: {
    bindto: '#chart',
    data: {
      labels: false
    }
  }
});

setInterval(function(){

  pubnub.publish({
    channel: 'eon-spline',
    message: {
      eon: {
        'Austin': Math.floor(Math.random() * 99),
        'New York': Math.floor(Math.random() * 99),
        'San Francisco': Math.floor(Math.random() * 99),
        'Portland': Math.floor(Math.random() * 99)
      }
    }
  });

}, 2000);

// Temperature Gauge code goes here
eon.chart({
  pubnub: pubnub,
  channels: ['eon-gauge'],
  generate: {
    bindto: '#gauge',
    data: {
      type: 'gauge',
    },
    gauge: {
      min: 0,
      max: 100
    },
    color: {
      pattern: ['#FF0000', '#F6C600', '#60B044'],
      threshold: {
        values: [30, 60, 90]
      }
    }
  }
});

setInterval(function(){

  pubnub.publish({
    channel: 'eon-gauge',
    message: {
      eon: {
        'data': Math.random() * 99
      }
    }
  })

}, 1000);