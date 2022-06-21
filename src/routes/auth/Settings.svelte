<script lang='ts'>

  let email: string;

  const deleteUser = async () => {
    try {
      const res = await fetch(`http://localhost:8080/auth/delete/${sessionStorage.getItem('Id')}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      console.log('removed');
      console.log(res);
      sessionStorage.removeItem('Id');
    } catch (e) {
      console.log(e);
    }
  };

  const updateEmail = async () => {
    try {
      fetch(`http://localhost:8080/auth/update/${sessionStorage.getItem('Id')}`, {
        method: 'PUT',
        body: email,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      console.log('updated email');
    } catch (e) {
      console.log(e);
    }
  };


</script>

<button on:click={deleteUser} class="btn btn-outline btn-error">Delete me</button>

<form on:submit|preventDefault={updateEmail}>
  <div class='form-control'>
    <label class='label'>
      <span class='label-text'>New Email</span>
    </label>
    <label class='input-group'>
      <span>Email</span>
      <input type='email' placeholder='info@site.com' class='input input-bordered' bind:value={email} />
    </label>
  </div>
  <button class='btn btn-primary text-white' type='submit'>Update Email</button>
</form>
