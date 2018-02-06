import axios from 'axios';

const dailyWeather= "https://api.openweathermap.org/data/2.5/weather?q="
const tail = "&APPID=c028cd684140ebca9ff15169efea8523"

const fiveDayWeather = "https://api.openweathermap.org/data/2.5/forecast?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city){
		let url = dailyWeather + city + tail;
		return axios.get(url)
	},
	fetchFiveDayWeather: function(city){
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;