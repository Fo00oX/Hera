<script lang='ts' context='module'>
  import { currentWeatherData, dailyTemperatureForecast } from '../store.ts';
  import { inCelsius } from '../util/metrics.ts';

</script>

<div class='stats shadow w-full max-w-lg'>

  <div class='stat flex justify-around items-center'>
    <div>
      <div class='stat-title font-bold'>Currently</div>
      <div class='stat-value'>{inCelsius(currentWeatherData("Vienna").temperature)}</div>
      <div class='stat-desc text-warning'>High: {inCelsius(dailyTemperatureForecast().low)}</div>
      <div class='stat-desc text-primary'>Low: {inCelsius(dailyTemperatureForecast().high)}</div>
    </div>
    <div class='stat-figure text-secondary'>
      <div class='avatar'>
        <div class='w-32 rounded-full'>
          <img src='weather/clear-day.svg' />
        </div>
      </div>
    </div>
  </div>

</div>
