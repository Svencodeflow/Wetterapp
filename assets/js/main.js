
//////Geo API
// fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=5f1a23c9ded07f2769af1ee3b31ec13c")
//     .then((response) => response.json())
//     .then((geo) => console.log(geo));


//////Data Api
const cityName = document.querySelector('#cityName');
const iconline = document.querySelector('#icon-degree')

const wetterApp = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5f1a23c9ded07f2769af1ee3b31ec13c")
        .then((response) => response.json())
        .then((data) => {
                cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country}`
                console.log((data));
                let temp = Number(data.main.temp - 273.15).toFixed(1);
                let date = new Date()
                iconline.innerHTML = `${temp}° Celsius <br>${date.toLocaleString()}`
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