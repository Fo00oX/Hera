<script lang="ts">
    import SearchBar from '../lib/SearchBar.svelte';
    import {currentWeather, loadWeather, locationSearchTerm} from '../store.ts';
    import CurrentWeatherCard from '../lib/CurrentWeatherCard.svelte';
    import Hero from '../lib/Hero.svelte';
    import SearchButton from "../lib/SearchButton.svelte";

</script>

<section class='flex flex-col gap-6'>
    <article class='flex justify-center w-full'>
        <SearchBar/>
        <button on:click={(e) => loadWeather($locationSearchTerm)}>
            suche
        </button>
    </article>
    <article>
        <main class='flex flex-col space-y-4'>
            {#if $currentWeather}
                <div>
                    <h1 class='text-4xl mb-2'>{$currentWeather.responseLocation}</h1>
                    <CurrentWeatherCard/>
                </div>
            {:else}
                <Hero/>
            {/if}
        </main>
    </article>
</section>
