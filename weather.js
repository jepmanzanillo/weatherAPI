/**
 * url example 
 * http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiid}
 * 
 * http://api.openweathermap.org/data/2.5/weather?q=quezon&appid=66e3269cc90edc90d1da4619e0a9f898
 * 
 * 
 * 
 */
class Weather {
	constructor(city) {
		this.apiID = '66e3269cc90edc90d1da4619e0a9f898';
		this.city = city;
	}

	//fetch weather from API
	async getWeather() {
		const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiID}`);

		const resData = await res.json();

		return resData.weather[0];
	}
	// fetch temperature from API
	async getTemperature() {
		const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiID}`);

		const resData = await res.json();

		return resData.main;
	}

	//change weather location
	changeLocation(city) {
		this.city = city;
	}
}
