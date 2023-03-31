
const cityName = document.querySelector('#cityName');
const iconline = document.querySelector('#icon-degree')
let locationIcon = document.querySelector('.weather-icon')
let val = document.querySelector("input[name='geowetter']")


const wetterApp = (num1, num2, name) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${num1}&lon=${num2}&appid=5f1a23c9ded07f2769af1ee3b31ec13c`)
                .then((response) => response.json())
                .then((data) => {
                        cityName.innerHTML = `Wetter in ${name}, ${data.sys.country}`
                        // console.log((data));

                        // Change Temp Function
                        let valTemp = document.querySelector("input[name='temp']:checked")
                        let tempcel = Number(data.main.temp - 273.15).toFixed(1) + "° Celcius";
                        let tempfahr = Number((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + "° Fahrenheit"
                        let tempi;

                        // console.log(valTemp.value);
                        if (valTemp.value == 1) {
                                tempi = tempfahr
                        } else {
                                tempi = tempcel
                        }

                        //New Date
                        let date = new Date()

                        //Icon für Wetter Anzeige
                        let icon = data.weather[0].icon
                        locationIcon = `<img src="./assets/img/${icon}.png" />`;

                        //Sunrise umrechnung von MS in Stunde : Minute
                        const sunri = data.sys.sunrise
                        const sunris = new Date(sunri * 1000).toLocaleTimeString().slice(0, 5)

                        //Sunset umrechnung von MS in Stunde : Minute
                        const suns = data.sys.sunset
                        const sunse = new Date(suns * 1000).toLocaleTimeString().slice(0, 5)

                        //Document innerHTML
                        iconline.innerHTML = `${locationIcon} ${tempi}<br> ${data.weather[0].description} <br>${date.toLocaleString()}`;
                        document.querySelector(".apiwind").innerHTML = `${data.wind.speed} m/s`;
                        document.querySelector(".cloudapi").innerHTML = `${data.weather[0].description}`;
                        document.querySelector(".pressapi").innerHTML = `${data.main.pressure} hpa`;
                        document.querySelector(".humiapi").innerHTML = `${data.main.humidity} %`;
                        document.querySelector(".sunriapi").innerHTML = `${sunris}`;
                        document.querySelector(".sunseapi").innerHTML = `${sunse}`;
                        document.querySelector(".geoapi").innerHTML = `[${data.coord.lat}, ${data.coord.lon}]`;
                });

}



const geo = (country) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=5f1a23c9ded07f2769af1ee3b31ec13c`)
                .then((response) => response.json())
                .then((geo) => {
                        let num3 = Number(geo[0].lat).toFixed(3);
                        let num4 = Number(geo[0].lon).toFixed(3);
                        let name3 = geo[0].name
                        // console.log(geo);
                        // console.log(num3);
                        // console.log(num4);
                        wetterApp(num3, num4, name3)
                });
}


function searchCountry() {
        let val = document.getElementById("geo")

        let input = val.value
        geo(input)
}





