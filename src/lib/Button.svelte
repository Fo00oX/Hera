<script lang='ts'>
  import { createEventDispatcher } from 'svelte';

  export let text: string;

  const dispatch = createEventDispatcher();

  export function clicked() {
    dispatch('clicked');
  };
</script>

<button class='btn btn-primary text-white' type='submit' on:click={clicked}>{text}</button>
