const uselesscontent = document.getElementById('useless-thing');
const temperatureInfo = document.getElementById('temperature');
const emojiInfo = document.getElementById('emoji');
const cityInput = document.getElementById('city');
const humidityInfo = document.getElementById('humidity');
const api = '8c613d9a099482bf87481c0354e07439';
const cityName = document.getElementById('city-name');
const fetchbutton = document.getElementById('fetchbutton');
const weathercard = document.getElementById('weather-card');
const aqitext = document.getElementById('aqi-text');

let uselessThings = [
    "There Are 7 Continents",
    "Zach Latta Love You (He is the Founder Hack Club)",
    "I Am A developer",
    "A dice Have 6 Sides",
    "Ahmm nothing",
    "What Should I tell You??",
    "Hackclub Is the Best",
    "I Sleep 14 Hours A day (Not Joking)",
    "It took me 10 hours to make this website"
];

function douseless() {
    index = Math.floor(Math.random()* (6 - 0 + 1));
    uselesscontent.textContent = uselessThings[index];
}

function change(href) {
    window.location.href=`apps/${href}`;
}

// weather logic

function getaqiemoji(aqi) {
    if (aqi === 1) return "Very Good 👍";
    if (aqi === 2) return "Good 👌";
    if (aqi === 3) return "Poor ⛔";
    if (aqi === 4) return "Very Poor 👎";
    if (aqi === 5) return "Hazardous ⚠️";
    else return "Out Of Code fahh";
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${api}&units=metric`;

async function getlocation(city) {
    const geoUrl = `https://openweathermap.org{encodeURIComponent(${city})}&limit=1&appid=${api}`;
    const response = await fetch(geoUrl);

    const data = await response.json();

    if (data.length === 0) {
        throw new error ("City Not Found");
    }

    return {
    lat : data[0].lat,
    lan : data[0].lon
    };
}

function getEmoji(id) {
    if (id >= 200 && id < 300) return "⛈️";
    if (id >= 300 && id < 400) return "🌦️";
    if (id >= 500 && id < 600) return "🌧️";
    if (id >= 600 && id < 700) return "❄️";
    if (id >= 700 && id < 800) return "🌫️";
    if (id === 800) return "☀️";
    if (id === 801) return "🌤️";
    if (id === 802) return "⛅";
    return "☁️";
}

async function getinfo(city) {
    url =  "https://api.openweathermap.org/data/2.5/weather?q="
        + encodeURIComponent(city)
        + "&units=metric&appid=" + api;

    const response = await fetch(url);
    
    if (response.status === 404) throw new Error("City not found");
    if (response.status === 401) throw new Error("Invalid or not yet active API key");
    if (!response.ok) throw new Error("Something went wrong, try again");

    return await response.json();
}

function shwoweather(data, aqi) {
    if (!data || !data.main || !data.weather || data.weather.length === 0) {
        alert('Invalid weather data received.');
        return;
    }

    else {
        cityName.textContent = data.name;
        temperatureInfo.textContent = `${data.main.temp} °C`;
        humidityInfo.textContent = `Humidity: ${data.main.humidity}%`;
        emojiInfo.textContent = getEmoji(data.weather[0].id);
        aqitext.textContent = `Aqi : `+ getaqiemoji(aqi);
    }}

function showError(message) {
    cityName.textContent = message;
    temperatureInfo.textContent = "";
    humidityInfo.textContent = "";
    emojiInfo.textContent = "😕";
}

async function getaqi(lat ,lon) {
    const aqiurl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`;
    const response = await fetch(aqiurl);

    const aqidata = await response.json();

    return aqidata.list[0].main.aqi;
}

async function search() {
    const city = cityInput.value.trim();
    weathercard.classList.remove('hidden');

    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    try {
        cityName.textContent = 'Loading...';
        const data = await getinfo(city);
        const {lat, lon} = data.coord;
        const aqi = await getaqi(lat, lon);
        shwoweather(data, aqi);
    } catch (error) {
        showError(error.message);
    }

}

fetchbutton.addEventListener('click', search);

// questions logic

function togglequestions(id) {
    let box = document.getElementById(id);
    let icon = document.getElementById("icon-" + id);

    if (box.classList.contains("grid-rows-[0fr]")) {
        box.classList.remove("grid-rows-[0fr]");
        box.classList.add("grid-rows-[1fr]");
        icon.classList.add("rotate-45");
    } else {
        box.classList.remove("grid-rows-[1fr]");
        box.classList.add("grid-rows-[0fr]");
        icon.classList.remove("rotate-45");
    }
}
   
function toggleanswer() {
    togglequestions("answer")
}

console.log('Bruh Why you Opened Console');
console.log('Here is A fun this you can do open your fridge and drink some water becuase i have coded for 6 hours straght with 1 hour brake to get unbanned')