<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
  import { currentWeatherData, locationSearchTerm } from './store.ts';
  import WeeklyWeatherCards from './lib/WeeklyWeatherCards.svelte';
  import SearchBar from './lib/SearchBar.svelte';
</script>

<Drawer>
  <section class='p-6'>
    <SearchBar bind:value={$locationSearchTerm}></SearchBar>
  </section>
  <main class='p-6'>
    <section class='flex flex-col space-y-4'>
      {#if currentWeatherData($locationSearchTerm)}
        <article>
          <h1 class='text-4xl mb-2'>{currentWeatherData($locationSearchTerm).name}</h1>
          <CurrentWeatherCard />
        </article>
        <article>
          <WeeklyWeatherCards location={$locationSearchTerm} />
        </article>
      {/if}
    </section>
  </main>
</Drawer>
