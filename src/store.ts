export const dailyTemperatureForecast = () => {
  return { high: 28, low: 17 };
};

export const currentWeatherData = (location: string) => {
  if (location === 'Vienna') {
    return { location: location, temperature: 25, feelsLike: 24, humidity: 0.25, windSpeed: 34, condition: 'sunny' };
  }
  return {};
};
export const weeklyWeatherForecast = (location: string) => {
  if (location === 'Vienna') {
    return {
      dateRange: {
        start: "01.05.2022",
        end: "07.05.2022",
      },
      0: {
        weekday: 'monday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      1: {
        weekday: 'tuesday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      2: {
        weekday: 'wednesday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      3: {
        weekday: 'thurday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      4: {
        weekday: 'friday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      5: {
        weekday: 'saturday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
      6: {
        weekday: 'sunday',
        location: location,
        temperature: 25,
        feelsLike: 24,
        humidity: 0.25,
        windSpeed: 34,
        condition: 'sunny',
      },
    };
  }
  return {};
};

