<script lang='ts'>
  import { writable } from 'svelte/store';
  import Register from '../routes/auth/Register.svelte';
  import Modal from 'svelte-simple-modal';

  const modal = writable(null);

  export const showModal = () => modal.set(Register);
</script>

<Modal show={$modal}>
  <button class='btn btn-ghost rounded-lg normal-case' on:click={showModal}>Register</button>
</Modal>
