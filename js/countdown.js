
// Set the date we're counting down to
var countDownDate = new Date("June 1, 2017 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var today = new Date().getTime();

  // Find the distance between now an the count down date
  var launchDate = countDownDate - today;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(launchDate / (1000 * 60 * 60 * 24));
  var hours = Math.round((launchDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.round((launchDate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.round((launchDate % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML =  hours;
  document.getElementById("minutes").innerHTML =  minutes;
  document.getElementById("seconds").innerHTML =  seconds;

  // If the count down is finished, write some text
  if (launchDate < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
