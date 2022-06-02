<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
  import { currentWeatherData, locationSearchTerm } from './store.ts';
  import WeeklyWeatherCards from './lib/WeeklyWeatherCards.svelte';
  import SearchBar from './lib/SearchBar.svelte';
  import Hero from './lib/Hero.svelte';
  import { Route } from 'svelte-navigator';
</script>

<Drawer>
  <Route path='/'>
    <section class='flex flex-col gap-6'>
      <article class='flex justify-center w-full'>
        <SearchBar />
      </article>
      <article>
        <main class='flex flex-col space-y-4'>
          {#if currentWeatherData($locationSearchTerm)}
            <div>
              <h1 class='text-4xl mb-2'>{currentWeatherData($locationSearchTerm).name}</h1>
              <CurrentWeatherCard />
            </div>
            <WeeklyWeatherCards location={$locationSearchTerm} />
          {:else}
            <Hero />
          {/if}
        </main>
      </article>
    </section>
  </Route>
  <Route path='weatherStation'>
    <div class='text-center space-y-4'>
      <div class='text-xl font-bold'>Welcome to your personal Weather Station! 🌤</div>
      <div>This feature is still in development 🚀, <br>come back soon 🔜!</div>
    </div>
  </Route>
</Drawer>
