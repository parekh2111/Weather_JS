// @ts-nocheck
class Weather{
	constructor(city, state){
		this.apiKey = 'c6f83ae1a5f2b0e36791b60a4c14b81f';
		//this.apiKey = '99dfe35fcb7de1ee';
		this.city = city;
		this.state = state;
	}
	//Fetch Weather from API

	async getWeather(){
		const response = await fetch (http://api.weatherstack.com/current
			?${this.apiKey}&query =${this.city}.json )
		
		
		
		//(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
		
		const responseData = await response.json();
		
		return responseData.current_observation;

	}

	// Change Wather location

	changeLocation(city, State){
		this.city = city;
		this.state = state;

	}

}