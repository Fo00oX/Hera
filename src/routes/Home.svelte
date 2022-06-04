<script lang="ts">
  import SearchBar from '../lib/SearchBar.svelte';
  import { currentWeatherData, locationSearchTerm } from '../store.ts';
  import WeeklyWeatherCards from '../lib/WeeklyWeatherCards.svelte';
  import CurrentWeatherCard from '../lib/CurrentWeatherCard.svelte';
  import Hero from '../lib/Hero.svelte';
</script>

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
