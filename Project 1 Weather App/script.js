const APIKEY = '10605351d9de0e34158b432ad1be208f'
const searchCity = document.getElementById('search-city')
document.querySelector('form').addEventListener(('submit'), (e) => {
    e.preventDefault()
    const city = searchCity.value.trim()
    if (city) {
        weatherDetails(city)
        forecast(city)
    } else {
        console.log('Please Enter City');
    }
})
async function weatherDetails(city) {
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    try {
        let response = await fetch(APIURL)
        if (!response.ok) {
            throw new Error('City Not Found')
        }
        let data = await response.json()
        console.log(data);
        const weatherImage = document.querySelector('.weather-img')
        const imageCheck = data.weather[0].main.toLowerCase()
        console.log(imageCheck);
        if (imageCheck === 'mist' || imageCheck === 'haze' || imageCheck === 'foggy' || imageCheck === 'smoke') {
            weatherImage.src = `/assets/images/mist.png`;
        } else if (imageCheck === 'clouds') {
            weatherImage.src = `/assets/images/clouds.png`;
        } else if (imageCheck === 'clear') {
            weatherImage.src = `/assets/images/clear.png`;
        } else if (imageCheck === 'drizzle') {
            weatherImage.src = `/assets/images/drizzle.png`;
        } else if (imageCheck === 'rain') {
            weatherImage.src = `/assets/images/rain.png`;
        } else if (imageCheck === 'snow') {
            weatherImage.src = `/assets/images/snow.png`;
        } else if (imageCheck === 'thunderstorm') {
            weatherImage.src = `/assets/images/thunderstorm.png`;
        } else if (imageCheck === 'windy') {
            weatherImage.src = `/assets/images/windy.png`;
        }
        document.querySelector('.cityTemp').innerHTML = Math.round(data.main.temp) + '&deg;c'
        document.querySelector('.conditions').innerHTML = 'Weather Conditions: ' + data.weather[0].description.split(' ').map((word) =>
            word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        document.querySelector('.feelLike').innerHTML = Math.round(data.main.feels_like) + '&deg;c'
        document.querySelector('.cityName').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.windSpeed').innerHTML = data.wind.speed + 'km/h'
    } catch (error) {
        console.log(error);
    }
}
weatherDetails('karachi')

async function forecast(city) {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`)
    let data = await res.json()
    console.log(data);
    document.querySelector('.forecast').innerHTML = data.list.slice(0, 5).map((currval) => {
    //     return `
    //     <div class="forecast-item">
    //     <h3>${currval.dt}</h3>
    //     <p>Temperature: ${currval.temp}°C</p>
    //      <p>Condition: ${currval.condition}</p>
    // </div>
    //     `
    })
}
forecast('karachi')