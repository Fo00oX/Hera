<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
  import { currentWeatherData } from './store.ts';
  import WeeklyWeatherCards from './lib/WeeklyWeatherCards.svelte';

  const location = 'Vienna';
</script>

<Drawer>
  <main class='p-6'>
    <section class='flex flex-col space-y-4'>
      <article>
        <h1 class='text-4xl mb-2'>{currentWeatherData(location).name}</h1>
        <CurrentWeatherCard />
      </article>
      <article>
        <WeeklyWeatherCards location={location} />
      </article>
    </section>
  </main>
</Drawer>
