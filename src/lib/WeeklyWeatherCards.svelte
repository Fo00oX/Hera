<script>
  import { inCelsius } from '../util/metrics.ts';
  import { weeklyWeatherForecast } from '../store.ts';
  import WeatherCard from './WeatherCard.svelte';

  export let location;

  const weeklyForecast = weeklyWeatherForecast(location);
</script>

<h2 class='text-2xl'>7-day forecast</h2>
<div class='w-full max-w-lg lg:max-w-unset max-w-full stats shadow stats-vertical lg:stats-horizontal'>
  {#each weeklyForecast as dailyWeatherForecast}
    <WeatherCard {...dailyWeatherForecast} />
  {/each}
</div>
