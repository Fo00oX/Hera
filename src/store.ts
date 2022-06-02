import { writable } from 'svelte/store';

export const dailyTemperatureForecast = () => {
  return { high: 28, low: 17 };
};

export const currentWeatherData = (location: string) => {
  if (location === 'Vienna') {
    return { name: location, temperature: 25, feelsLike: 24, humidity: 0.25, windSpeed: 34, condition: 'sunny' };
  }
  return null;
};
export const weeklyWeatherForecast = (location: string) => {
  if (location === 'Vienna') {
    return [
      {
        weekday: 'monday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'clear-day',
      },
      {
        weekday: 'tuesday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'overcast',
      },
      {
        weekday: 'wednesday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'overcast',
      },
      {
        weekday: 'thursday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'cloudy',
      },
      {
        weekday: 'friday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'cloudy',
      },
      {
        weekday: 'saturday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'overcast-day',
      },
      {
        weekday: 'sunday',
        name: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'clear-day',
      },
    ];
  }
  return [];
};

export const locationSearchTerm = writable("");
