const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const CITY_FORECAST = (id, key) => `${BASE_URL}/forecast?id=${id}&appid=${key}`;
const CITIES_FORECAST = (ids, key) =>
  `${BASE_URL}/group?id=${ids.join(',')}&appid=${key}&units=metric`;

export const WEATHER_URLS = {
  CITY_FORECAST,
  CITIES_FORECAST,
};
