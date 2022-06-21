import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
export const loading = writable(false);
export const locationSearchTerm = writable('');

const currentWeatherStab: CurrentWeather = {
  responseLocation: '',
  description: '',
  temp: 0,
  feels_like: 0,
  temp_min: 0,
  temp_max: 0,
};
export const currentWeather = writable(currentWeatherStab);


interface CurrentWeather {
  responseLocation: string;
  description: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

export async function loadWeather(location: string): Promise<void> {
  async function get() {
    loading.set(true);
    error.set(false);
    try {
      const response = await fetch(`http://localhost:8080/public/weather/current/${location}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
          'Content-Type': 'application/json',
        },
      });
      currentWeather.set(await response.json() as CurrentWeather);
    } catch (e) {
      error.set(e);
    }
    loading.set(false);
  }

  await get();
}


export async function loadPrivateWeather(location: string): Promise<void> {
  async function get() {
    loading.set(true);
    error.set(false);
    try {
      const response = await fetch(`http://localhost:8080/private/weather/current/${location}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
          'Content-Type': 'application/json',
        },
      });
      currentWeather.set(await response.json() as CurrentWeather);
    } catch (e) {
      error.set(e);
    }
    loading.set(false);
  }

  await get();
}

