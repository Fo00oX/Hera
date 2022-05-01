import { writable, derived } from 'svelte/store';

/** Store for your data.
 This assumes the data you're pulling back will be an array.
 If it's going to be an object, default this to an empty object.
 **/
export const apiData = writable([]);

/** Data transformation.
 For our use case, we only care about the drink names, not the other information.
 Here, we'll create a derived store to hold the drink names.
 **/
export const dailyTemperatureForecast = () => {
  return { high: 28, low: 17 };
};

export const currentWeatherData = () => {
  return { location: 'vienna', temperature: 25, feelsLike: 24, humidity: 0.25, windSpeed: 34, condition: 'sunny' };
};
