const latitude = -6.64;
const longitude = -79.79;
const apiKey = "9a00efa422d421e10572482c16b77bf3";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
const forecastUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
console.log(forecastUrl);
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#description");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const todayWeather = document.querySelector("#today-weather");
const tomorrowWeather = document.querySelector("#tomorrow-weather");
const dayAfterTomorrowWeather = document.querySelector("#day-after-tomorrow-weather");

async function fetchCurrentWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchWeatherForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayWeatherForecast(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    const weather = data.weather[0];
    const mainData = data.main;
    currentTemp.textContent = `${mainData.temp}°C`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weather.icon}.png`);
    weatherIcon.setAttribute("alt", weather.description);
    description.textContent = weather.main;
    highTemp.textContent = `High: ${mainData.temp_max}°C`;
    lowTemp.textContent = `Low: ${mainData.temp_min}°C`;
    humidity.textContent = `Humidity: ${mainData.humidity}%`;
    sunrise.textContent = `Sunrise: ${convertTimeStampToHour(data.sys.sunrise)}`;
    sunset.textContent = `Sunset: ${convertTimeStampToHour(data.sys.sunset)}`;
}

function displayWeatherForecast(data){
    const currentTemp = data.list[0].main.temp;
    const currentTime = new Date(data.list[0].dt * 1000);
    const tomorrowTime = new Date(data.list[0].dt * 1000).setHours(currentTime.getHours()+24);
    const afterTomorrowTime = new Date(data.list[0].dt * 1000).setHours(currentTime.getHours()+48);
    tomorrowTime.to
    const tomorrowWeekDay = formatToWeekday(tomorrowTime);
    const afterTomorrowWDay = formatToWeekday(afterTomorrowTime);
    const tomorrowForecast = findWeatherForecast(data, tomorrowTime);
    const afterTomorrowForecast = findWeatherForecast(data, afterTomorrowTime);
    todayWeather.innerHTML = `Today: <span>${currentTemp}°C</span>`;
    tomorrowWeather.innerHTML = `${tomorrowWeekDay}: <span>${tomorrowForecast}°C</span>`;
    dayAfterTomorrowWeather.innerHTML = `${afterTomorrowWDay}: <span>${afterTomorrowForecast}°C</span>`;

}

function formatToWeekday(date){
    const formatter = new Intl.DateTimeFormat("en-US", {weekday:"long"});
    return formatter.format(date);
}

function convertTimeStampToHour(timestamp) {
    const date = new Date(timestamp * 1000);
    const formatter = new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: true });
    return formatter.format(date);
}

function findWeatherForecast(data,date){
    const forecast = data.list.find((wf) => wf.dt == date/1000);
    return forecast.main.temp;
}

fetchCurrentWeather();
fetchWeatherForecast();