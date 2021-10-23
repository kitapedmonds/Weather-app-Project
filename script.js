function formatDate(date) {
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let dayz = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayz[dayIndex];
  return `${day} ${hour}:${minutes}`;
}

function showWeather(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
}

function searchEvent(event) {
  event.preventDefault();
  let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

let h5 = document.querySelector("h5");
let now = new Date();
h5.innerHTML = formatDate(now);

let searchForm = document.querySelector("#search-input");
searchForm.addEventListener("submit", searchEvent);
