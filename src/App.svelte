<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import { Route } from 'svelte-navigator';
  import WeatherStation from './routes/WeatherStation.svelte';
  import Home from './routes/Home.svelte';
  import { onMount } from 'svelte';
  import auth from './services/authService';
  import { isAuthenticated, user } from './store';

  let auth0Client;

  onMount(async () => {
    console.log("onMount");
    // const res = await fetch(`http://localhost:8080/weather/vienna`, {mode: 'no-cors'});
    // console.log("res", res);
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });

  function login() {
    console.log('logging in');
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }
</script>

<Drawer>
  <Route path='/' component={Home} />
  <Route path='weatherStation' component={WeatherStation} />
  <button on:click={login}>Login</button>
</Drawer>
