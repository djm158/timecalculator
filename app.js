var addButton = document.getElementById("add");
var totalButton = document.getElementById("total");

totalButton.addEventListener("click", calculateTotal);
addButton.addEventListener("click", createNewTimeInput);

function createNewTimeInput() {
  var row = document.createElement("div");
  row.classList.add("row");

  var hours = document.createElement("input");
  hours.setAttribute("type", "text");
  hours.classList.add("hoursInput");

  var minutes = document.createElement("input");
  minutes.setAttribute("type", "text");
  minutes.classList.add("minutesInput");

  var seconds = document.createElement("input");
  seconds.setAttribute("type", "text");
  seconds.classList.add("secondsInput");

  var hoursSpan = document.createElement("span");
  var minutesSpan = document.createElement("span");
  var secondsSpan = document.createElement("span");

  var hoursText = document.createTextNode("hours ");
  var minutesText = document.createTextNode("minutes ");
  var secondsText = document.createTextNode("seconds ");

  hoursSpan.appendChild(hours);
  hoursSpan.appendChild(hoursText);

  minutesSpan.appendChild(minutes);
  minutesSpan.appendChild(minutesText);

  secondsSpan.appendChild(seconds);
  secondsSpan.appendChild(secondsText);

  row.appendChild(hoursSpan);
  row.appendChild(minutesSpan);
  row.appendChild(secondsSpan);

  var calc = document.getElementById("calc");
  calc.appendChild(row);
}

function calculateTotal() {
  var hours = document.getElementsByClassName("hoursInput");
  var minutes = document.getElementsByClassName("minutesInput");
  var seconds = document.getElementsByClassName("secondsInput");

  var totalHours = 0;
  var totalMinutes = 0;
  var totalSeconds = 0;

  for (var i = 0; i < hours.length; i++) {
    totalHours += parseInt(hours[i].value);
    totalMinutes += parseInt(minutes[i].value);
    totalSeconds += parseInt(seconds[i].value);
  }

  var hoursResult = document.getElementById("hoursResult");
  var minutesResult = document.getElementById("minutesResult");
  var secondsResult = document.getElementById("secondsResult");
  hoursResult.value = totalHours;
  minutesResult.value = totalMinutes;
  secondsResult.value = totalSeconds;
}
