// init weather
const weather = new Weather('quezon');

function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			console.log(results);
		})
		.catch((err) => console.log(err));
}

function getTemperature() {
	weather
		.getTemperature()
		.then((results) => {
			console.log(results);
		})
		.catch((err) => console.log(err));
}



getWeather();
getTemperature();