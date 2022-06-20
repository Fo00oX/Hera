<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import { Route } from 'svelte-navigator';
  import WeatherStation from './routes/WeatherStation.svelte';
  import Home from './routes/Home.svelte';
  import Register from './routes/auth/Register.svelte';
  import Login from './routes/auth/Login.svelte';

</script>

<Drawer>
  <Route path='/auth/register' component={ Register } />
  <Route path='/auth/login' component={ Login } />
  <Route path='/' component={ Home } />
  <Route path='weatherStation' component={ WeatherStation } />
</Drawer>
