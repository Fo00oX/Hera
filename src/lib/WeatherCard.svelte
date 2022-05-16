<script>
  import { inCelsius } from '../util/metrics.ts';

  export let weekday;
  export let name;
  export let temperature;
  export let feelsLike;
  export let humidity;
  export let windSpeed;
  export let condition;

</script>

<div class='stat flex justify-around items-center w-full max-w-lg'>
  <div>
    <div class='stat-title text-2xl'>{weekday}</div>
    <div class='text-lg stat-desc'>Temp: {inCelsius(temperature)}</div>
    <div class='text-lg stat-desc'>feelsLike: {inCelsius(feelsLike)}</div>
  </div>
  <div class='stat-figure text-secondary'>
    <div class='avatar'>
      <div class='w-32 rounded-full'>
        <img src='weather/{condition}.svg' />
      </div>
    </div>
  </div>
</div>
