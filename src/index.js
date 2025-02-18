function refreshWeather(response){
    let temperatureElment = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElment.innerHTML = Math.round(temperature);
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