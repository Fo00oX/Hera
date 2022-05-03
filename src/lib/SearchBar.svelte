<script lang='ts'>
  import { locationSearchTerm } from '../store.ts';
</script>

<input bind:value={$locationSearchTerm} type='text' placeholder='search for a place'
       class='input input-bordered w-full max-w-xs'>
