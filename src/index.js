function refreshWeather(response){
    let temperatureElment = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
   // let description = response.data.condition.description;
   let humidityElement = document.querySelector("#humidity");
   let windSpeedElement = document.querySelector("#wind-speed");
   let timeElement = document.querySelector("#time");
   let date = new Date(response.data.time * 1000);
   let iconElement = document.querySelector("#icon");

    timeElement.innerHTML =  formatDate(date);
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML =`${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElment.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city){
    let apiKey = "ef080d077be87f0o3fbae14a3eab95ta";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(refreshWeather);

}



function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   let cityElement = document.querySelector("#city");
   cityElement.innerHTML = searchInput.value;
   searchCity(searchInput.value);
    
}




let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function displayForecast() {
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";
  
    days.forEach(function (day) {
      forecastHtml =
        forecastHtml +
        `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${day}</div>
          <div class="weather-forecast-icon">🌤️</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>15º</strong>
            </div>
            <div class="weather-forecast-temperature">9º</div>
          </div>
        </div>
      `;
    });
  
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  }
  displayForecast();