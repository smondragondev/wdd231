const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const latitude = 49.75;
const longitude = 6.64;
const apiKey = "9a00efa422d421e10572482c16b77bf3";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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
    currentTemp.textContent = `${data.main.temp}°C`;
    captionDesc.textContent = weather.description;
    weatherIcon.setAttribute("src",`https://openweathermap.org/img/w/${weather.icon}.png`);
    weatherIcon.setAttribute("alt",weather.description);
}

apiFetch();