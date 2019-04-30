// init storage
const storage = new Storage();
// get location data
const weatherLocation = storage.getLocationData();
// init weather
const weather = new Weather(weatherLocation.city);
// init ui
const ui = new UI();

// when DOM loads
document.addEventListener('DOMContentLoaded', () => {
	weather
		.getWeather()
		.then((results) => {
			ui.paint(results);
			//console.log(results);
		})
		.catch((err) => console.log(err));
});

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;

	weather.changeLocation(city);

	storage.setLocationData(city);
	
	weather
		.getWeather()
		.then((results) => {
			ui.paint(results);
			//console.log(results);
		})
		.catch((err) => console.log(err));

	$('#locModal').modal('hide');
});
