// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const windchill = document.querySelector(".windchill");

const url = `https://api.openweathermap.org/data/2.5/weather?zip=97741,us&appid=33e21c071ddd9d8ad6330516b69de4b7`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
        console.log(error);
  }
}

function  displayResults(weatherData) {
    const t = weatherData.main.temp.toFixed(0);
    const s = weatherData.wind.speed;

    if ((t <= 50) && (s >= 3)) {
        const f = 35.74 + (0.6215 * t) - (35.775 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        windchill.textContent = f.toFixed(1) + "°F";
    }    

    currentTemp.innerHTML = `<strong>${t}</strong>`;
    windSpeed.innerHTML = s;

    const iconsrc = `./images/weather/${weatherData.weather[0].icon}.png`;
    const desc = toTitleCase(weatherData.weather[0].description);

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}