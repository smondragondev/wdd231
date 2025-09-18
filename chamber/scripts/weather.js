const latitude = -6.64;
const longitude = -79.79;
const apiKey = "9a00efa422d421e10572482c16b77bf3";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
    const weather = data.weather[0];
    const mainData = data.main;
    currentTemp.textContent = `${mainData.temp}°C`;
    weatherIcon.setAttribute("src",`https://openweathermap.org/img/w/${weather.icon}.png`);
    weatherIcon.setAttribute("alt",weather.description);
    description.textContent = weather.main;
    highTemp.textContent = `High: ${mainData.temp_max}°C`;
    lowTemp.textContent = `Low: ${mainData.temp_min}°C`;
    humidity.textContent = `Humidity: ${mainData.humidity}%`;
    sunrise.textContent = `Sunrise: ${convertTimeStampToHour(data.sys.sunrise)}`;
    sunset.textContent = `Sunset: ${convertTimeStampToHour(data.sys.sunset)}`;
}

function convertTimeStampToHour(timestamp){
    const date = new Date(timestamp * 1000);
    const formatter = new Intl.DateTimeFormat("en-US", {hour:"numeric", hour12:true});
    return formatter.format(date);
}

apiFetch();