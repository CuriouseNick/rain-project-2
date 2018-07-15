
$(document).ready(function() {

  $("body").on("click", "#onAC", function() {

    alert("AC is on!");

    //Insert Function from Aruduino Framework to turn on AC

  }).on("click", "#offAC", function() {

    alert("AC is off!");

     //Insert Function from Aruduino Framework to turn off AC

  }).on("click", "#onH", function() {

    alert("Heat is on");

     //Insert Function from Aruduino Framework to turn on Heat

  }).on("click","#offH",function(){
      alert("Heat is off")

       //Insert Function from Aruduino Framework to turn off Heat
  });


//     var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");

// output.innerHTML = slider.value;
    
// slider.oninput = function() {
//       output.innerHTML = this.value;
//     }


//     $('.dropdown-trigger').dropdown();

//     Temperature graph code goes here
//     var pubnub = new PubNub({
//       publishKey: 'pub-c-4b86ea2a-d36b-4d87-b9f6-8d5b87fa3581',
//       subscribeKey: 'sub-c-fb9f7ab4-83d1-11e8-b9aa-969f058f0c4c'
//     });
  
//     var lightObject;
//     var tempObject;
  
//     eon.chart({
//       channels: ['eon-spline'],
//       history: true,
//       flow: true,
//       pubnub: pubnub,
//       generate: {
//         bindto: '#chart',
//         data: {
//           labels: false
//         }
//       }
//     });
  
//     setInterval(function(){
//       $.get("/api/temp", function(data) {
//         console.log(data);
//         tempObject = data;
//       });
  
//       if (tempObject.temperature > 84) {
//         console.log("AC IS ON !!!!!");
//       }
  
  
//       pubnub.publish({
//         channel: 'eon-spline',
//         message: {
//           eon: {
//             "temperature": tempObject.temperature
//           }
//         }
//       });
  
//     }, 2000);
  
//     // Temperature Gauge code goes here
//     eon.chart({
//       pubnub: pubnub,
//       channels: ['eon-gauge'],
//       generate: {
//         bindto: '#gauge',
//         data: {
//           type: 'gauge',
//         },
//         gauge: {
//           label: {
//             format: function(value, ratio){
//               return value;
//             }
//           },
//           min: 0,
//           max: 100
//         },
//         color: {
//           pattern: ['#FF0000', '#F6C600', '#60B044'],
//           threshold: {
//             values: [30, 60, 90]
//           }
//         }
//       }
//     });
  
//     setInterval(function(){
  
//       pubnub.publish({
//         channel: 'eon-gauge',
//         message: {
//           eon: {
//             "temperature": tempObject.temperature
//           }
//         }
//       })
  
//     }, 2000);


//   });

