import {derived, writable} from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
export const loading = writable(false)
const currentWeatherStab: CurrentWeather = {
    name: "",
    temperature: 0,
    feelsLike: 0,
    humidity: 0,
    windSpeed: 0,
    condition: "",
}
export const currentWeather = writable(currentWeatherStab)
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1ZG9uQHRlc3QuYXQiLCJpYXQiOjE2NTU2NDU0ODYsImV4cCI6MTY1NjI1MDI4Nn0.1f-o9kPD-8Tj2YMNj3AHBANqsCSjH5OnyCoYv_G4zusNwHOme4mHiYG7cpSgI803pV2843zz7qFCauxKxn0HdA"

export const dailyTemperatureForecast = () => {
    return {high: 28, low: 17};
};

interface CurrentWeather {
    responseLocation: string;
    description: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
}

export async function loadWeather (location: string): Promise<void>{
    async function get() {
        loading.set(true)
        error.set(false)
        console.log("in Get")
        try {
            const response = await fetch(`http://localhost:8080/public/weather/current/${location}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            currentWeather.set(await response.json() as CurrentWeather)
        } catch (e) {
            error.set(e)
        }
        loading.set(false)
    }

    await get()
}
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

export const apiData = writable([]);

/** Data transformation.
 For our use case, we only care about the drink names, not the other information.
 Here, we'll create a derived store to hold the drink names.
 **/
export const weatherForecast = derived(apiData, ($apiData) => {
    if ($apiData) {
        return $apiData;
    }
    return [];
});

export const locationSearchTerm = writable('');
