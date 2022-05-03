<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
  import { currentWeatherData, locationSearchTerm } from './store.ts';
  import WeeklyWeatherCards from './lib/WeeklyWeatherCards.svelte';
  import SearchBar from './lib/SearchBar.svelte';
</script>

<Drawer>
  <section class='flex flex-col gap-6'>
    <article>
      <SearchBar bind:value={$locationSearchTerm}></SearchBar>
    </article>
    <article>
      <main class='flex flex-col space-y-4'>
        {#if currentWeatherData($locationSearchTerm)}
          <div>
            <h1 class='text-4xl mb-2'>{currentWeatherData($locationSearchTerm).name}</h1>
            <CurrentWeatherCard />
          </div>
          <article>
            <WeeklyWeatherCards location={$locationSearchTerm} />
          </article>
        {/if}
      </main>
    </article>
  </section>
</Drawer>
