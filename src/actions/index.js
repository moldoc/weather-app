// For AJAX requests
import axios from 'axios';

const API_KEY = '9a94af7c8ad334bffee1c6e488478804';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},fi`;
  // Receive a promise and make an AJAX request
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    //The request is sent to the reducers via middleware
    payload: request
  };
}
