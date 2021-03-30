// Init UI object
const ui = new UI();

// Init Weather object
const weather = new Weather('Ahmedabad', 'Gujarat');

//Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
weather.getWeather()
.then(results => {
	ui.paint(results);
})
.catch(err => console.log(err));}