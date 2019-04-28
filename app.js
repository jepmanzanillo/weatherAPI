// init weather
const weather = new Weather('Quezon');

function getWeather(){ 
weather.getWeather()
.then(results => {
    console.log(results);
})
.catch(err => console.log(err));
}