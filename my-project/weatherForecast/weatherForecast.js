
let citiesWeather = [
    { cityName: "New York", temperature: 22, condition: "Sunny" },
    { cityName: "Los Angeles", temperature: 28, condition: "Cloudy" },
    { cityName: "Chicago", temperature: 10, condition: "Rainy" }
];

const addCityWeather = (cityName, temperature, condition) => {
    citiesWeather.push({ cityName, temperature, condition });
    console.log(`Weather data for "${cityName}" added.`);
};

const findHottestCity = () => {
    return citiesWeather.find(city => city.temperature === Math.max(...citiesWeather.map(city => city.temperature)));
};

const filterByCondition = (condition) => {
    return citiesWeather.filter(city => city.condition === condition);
};

const mapCityNamesWithTemp = () => {
    return citiesWeather.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);
};

const displayWeatherSummary = () => {
    citiesWeather.forEach(city => {
        console.log(`City: ${city.cityName}, Temp: ${city.temperature}°C, Condition: ${city.condition}`);
    });
};

export { addCityWeather, findHottestCity, filterByCondition, mapCityNamesWithTemp, displayWeatherSummary };
