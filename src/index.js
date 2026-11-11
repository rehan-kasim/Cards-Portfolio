const uselesscontent = document.getElementById('useless-thing');
const temperatureInfo = document.getElementById('temperature');
const emojiInfo = document.getElementById('emoji');
const cityInput = document.getElementById('city');
const humidityInfo = document.getElementById('humidity');
const api = '8c613d9a099482bf87481c0354e07439';
const cityName = document.getElementById('city-name');
const fetchbutton = document.getElementById('fetchbutton')

let uselessThings = [
    "There Are 7 Continents",
    "Zach Latta Love You (He is the Founder Hack Club)",
    "I Am A developer",
    "A dice Have 6 Sides",
    "Ahmm nothing",
    "What Should I tell You??",
    "Hackclub Is the Best",
    "I Sleep 14 Hours A day (Not Joking)"
];

function douseless() {
    index = Math.floor(Math.random()* (6 - 0 + 1));
    uselesscontent.textContent = uselessThings[index];
}

function change(href) {
    window.location.href=`apps/${href}`;
}

// weather logic

let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${api}&units=metric`;

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

function shwoweather(data) {
    if (!data || !data.main || !data.weather || data.weather.length === 0) {
        alert('Invalid weather data received.');
        return;
    }

    else {
        cityName.textContent = data.name;
        temperatureInfo.textContent = `${data.main.temp} °C`;
        humidityInfo.textContent = `Humidity: ${data.main.humidity}%`;
        emojiInfo.textContent = getEmoji(data.weather[0].id);
    }}

function showError(message) {
    cityName.textContent = message;
    temperatureInfo.textContent = "";
    humidityInfo.textContent = "";
    emojiInfo.textContent = "😕";
}

async function search() {
    const city = cityInput.value.trim();

    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    try {
        cityName.textContent = 'Loading...';
        const data = await getinfo(city);
        shwoweather(data);
    } catch (error) {
        showError(error.message);
    }

}

fetchbutton.addEventListener('click', search);

console.log('Bruh Why you Opened Console')