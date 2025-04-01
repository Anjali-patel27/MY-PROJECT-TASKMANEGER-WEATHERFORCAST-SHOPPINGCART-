import { addCityWeather, findHottestCity, filterByCondition, mapCityNamesWithTemp, displayWeatherSummary } from './weatherForecast.js';

addCityWeather("Miami", 32, "Sunny");
console.log(findHottestCity());
console.log(filterByCondition("Sunny"));
console.log(mapCityNamesWithTemp());
displayWeatherSummary();
