<script lang='ts' context='module'>
  function inCelsius(temp: number) {
    return temp + '\xB0C';
  }
</script>

<div class='stats shadow w-full max-w-lg'>

  <div class='stat flex justify-around items-center'>
    <div>
      <div class='stat-title font-bold'>Aktuell</div>
      <div class='stat-value'>{inCelsius(25)}</div>
      <div class='stat-desc text-primary'>Min: {inCelsius(17)}</div>
      <div class='stat-desc text-warning'>Max: {inCelsius(27)}</div>
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
