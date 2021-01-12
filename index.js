
// --- I set the date to 2021 so it actually runs! --- //
var eventDate = new Date("Oct 30, 2021 12:00:00").getTime();

var counter = setInterval(function() {
  var today = new Date().getTime();
  var timeGap = eventDate - today;

  var days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (minutes < 0) {
    clearInterval(counter);
    document.getElementById("days").innerHTML = "NOW";
    document.getElementById("hours").innerHTML = "NOW";
    document.getElementById("minutes").innerHTML = "NOW";
    document.getElementById("seconds").innerHTML = "NOW";
  }
}, 1000);