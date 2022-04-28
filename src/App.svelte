<script lang='ts'>
  import Drawer from './lib/Drawer.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<Drawer>
  <div class='flex flex-col justify-between h-full'>
    <main class='p-6'>
      Content
    </main>
  </div>
  <Footer />
</Drawer>
