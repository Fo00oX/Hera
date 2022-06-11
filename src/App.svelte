<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import { Route } from 'svelte-navigator';
  import WeatherStation from './routes/WeatherStation.svelte';
  import Home from './routes/Home.svelte';
  import { onMount } from 'svelte';
  import { apiData } from './store';

  onMount(async () => {
    fetch(`http://localhost:8080/weather/vienna`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apiData.set(data);
      }).catch(error => {
      console.log(error);
      return [];
    });
  });
</script>

<Drawer>
  <Route path='/' component={ Home } />
  <Route path='weatherStation' component={ WeatherStation } />
</Drawer>
