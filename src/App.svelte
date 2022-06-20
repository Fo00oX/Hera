<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import { Route } from 'svelte-navigator';
  import WeatherStation from './routes/WeatherStation.svelte';
  import Home from './routes/Home.svelte';

  let email = 'hallo';
  let password = 'letmein';
  let result = null;

  async function register() {
    const res = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      body: JSON.stringify({
          email,
          password,
        },
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();
    result = JSON.stringify(json);
    console.log(result);
  }
</script>

<Drawer>
  <button on:click={register}>Register</button>
  <Route path='/' component={ Home } />
  <Route path='weatherStation' component={ WeatherStation } />
</Drawer>
