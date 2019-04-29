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
		const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiID}`);

        const resData = await res.json();
        
        // const wData = resData.weather[0];

        // const tempData = resData.main;

        // const locName = resData.name;
        
        return resData;
	}

    
    	//change weather location
	changeLocation(city) {
		this.city = city;
	}
}
