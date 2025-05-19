const apiKey = "7c6f061a6e2f91da3274ee8b968037e0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const cityInput = document.querySelector(".search input");
const search = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(response);
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clear"){
        document.querySelector(".weather-icon").src = "assets/clear.png";
    } else if(data.weather[0].main === "Clouds" && data.weather[0].description === "few clouds"){
        document.querySelector(".weather-icon").src = "assets/mist.png";
    } else if(data.weather[0].main === "Clouds" && data.weather[0].description === "overcast clouds"){
        document.querySelector(".weather-icon").src = "assets/clouds.png";
    } else if(data.weather[0].main === "Rain"){
        document.querySelector(".weather-icon").src = "assets/rain.png";
    } else if(data.weather[0].main === "Mist"){
        document.querySelector(".weather-icon").src = "assets/wind.png";
    } else if(data.weather[0].main === "Snow"){
        document.querySelector(".weather-icon").src = "assets/snow.png";
    }
}

search.addEventListener('click', function(){
    checkWeather(cityInput.value);
});

 //+ `&q=${city}`   &q=mississauga&units=metric