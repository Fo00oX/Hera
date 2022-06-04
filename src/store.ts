import { writable } from 'svelte/store';

export const dailyTemperatureForecast = () => {
  return { high: 28, low: 17 };
};

interface CurrentWeather {
  name: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

export const currentWeatherData = (location: string): CurrentWeather => {
  if (location === 'Vienna') {
    return { name: location, temperature: 25, feelsLike: 24, humidity: 0.25, windSpeed: 34, condition: 'sunny' };
  }
};
export const weeklyWeatherForecast = (location: string) => {
  if (location === 'Vienna') {
    return [
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
    ];
  }
};

export const locationSearchTerm = writable('');
