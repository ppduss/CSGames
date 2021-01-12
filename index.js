
// --- I set the date to 2021 so it actually runs! --- //
const eventDate = new Date("Oct 30, 2021 12:00:00").getTime();

const counter = setInterval(function() {
  const today = new Date().getTime();
  const timeGap = eventDate - today;

  const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("consolidatedTime").innerHTML = days+"D "+hours+"H "+minutes+"M "+seconds+"S ";

  if (minutes < 0) {
    clearInterval(counter);
    document.getElementById("days").innerHTML = "NOW";
    document.getElementById("hours").innerHTML = "NOW";
    document.getElementById("minutes").innerHTML = "NOW";
    document.getElementById("seconds").innerHTML = "NOW";
    document.getElementById("consolidatedTime").innerHTML = "NOW";
  }
}, 1000);