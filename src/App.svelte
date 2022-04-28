<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import Footer from './lib/Footer.svelte';
  import CurrentWeatherCard from './lib/CurrentWeatherCard.svelte';
</script>

<Drawer>
  <div class='flex flex-col justify-between h-full'>
    <main class='p-6'>
      <CurrentWeatherCard></CurrentWeatherCard>
    </main>
  </div>
  <Footer />
</Drawer>
