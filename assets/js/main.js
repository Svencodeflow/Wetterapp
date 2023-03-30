
//////Geo API
// fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=5f1a23c9ded07f2769af1ee3b31ec13c")
//     .then((response) => response.json())
//     .then((geo) => console.log(geo));


//////Data Api
const cityName = document.querySelector('#cityName');
const iconline = document.querySelector('#icon-degree')
let locationIcon = document.querySelector('.weather-icon')

const wetterApp = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=51&lon=12&appid=5f1a23c9ded07f2769af1ee3b31ec13c")
        .then((response) => response.json())
        .then((data) => {
                cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country}`
                console.log((data));

                //Umrechnung von Kelvin zu Celsius
                let temp = Number(data.main.temp - 273.15).toFixed(1);
                
                let date = new Date()
                
                let icon = data.weather[0].icon
                locationIcon = `<img src="./assets/img/${icon}.png" />`;

                //Sunrise umrechnung von MS in Stunde : Minute
                const sunri = data.sys.sunrise
                const sunris = new Date(sunri * 1000).toLocaleTimeString().slice(0, 5)

                //Sunset umrechnung von MS in Stunde : Minute
                const suns = data.sys.sunset
                const sunse = new Date(suns * 1000).toLocaleTimeString().slice(0, 5)

                console.log(data.wind.speed);
                iconline.innerHTML = `${locationIcon} ${temp}° Celsius <br> ${data.weather[0].description} <br>${date.toLocaleString()}`;
                document.querySelector(".apiwind").innerHTML = `${data.wind.speed} m/s`;
                document.querySelector(".cloudapi").innerHTML = `${data.weather[0].description}`;
                document.querySelector(".pressapi").innerHTML = `${data.main.pressure} hpa`;
                document.querySelector(".humiapi").innerHTML = `${data.main.humidity} %`;
                document.querySelector(".sunriapi").innerHTML = `${sunris}`;
                document.querySelector(".sunseapi").innerHTML = `${sunse}`;
                document.querySelector(".geoapi").innerHTML = `[${data.coord.lat}, ${data.coord.lon}]`;
                console.log(data.weather[0].icon);
        });
        
}

wetterApp()




/*=================== 
        Megan 
=====================*/
// Hello again

/*=================== 
        Kevin 
=====================*/


/*=================== 
        Sven 
=====================*/

//helllo aigain in the irgendwas 