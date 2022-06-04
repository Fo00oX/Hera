<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import { Route } from 'svelte-navigator';
  import WeatherStation from './routes/WeatherStation.svelte';
  import Home from './routes/Home.svelte';
</script>

<Drawer>
  <Route path='/' component='{Home}' />
  <Route path='weatherStation' component='{WeatherStation}' />
</Drawer>
