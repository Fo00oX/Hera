<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import Footer from './lib/Footer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
  import { currentWeatherData } from './store.ts';
  import DailyWeatherCard from './lib/DailyWeatherCard.svelte';
</script>

<Drawer>
  <main class='min-h-full p-6'>
    <section class='flex flex-col space-y-4'>
      <article>
        <h1 class='text-4xl mb-2'>{currentWeatherData("Vienna").location}</h1>
        <CurrentWeatherCard />
      </article>
      <article>
        <DailyWeatherCard />
      </article>
    </section>
  </main>
</Drawer>
