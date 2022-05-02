<script>
  import { inCelsius } from '../util/metrics.ts';
</script>

<div class='flex space-x-6 '>
  <div class='text-warning'>
    High: {inCelsius(25)}
  </div>
  <div class='text-primary'>
    Low: {inCelsius(12)}
  </div>
</div>
