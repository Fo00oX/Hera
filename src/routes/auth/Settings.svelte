<script lang='ts'>

  let nickname: string;

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
      sessionStorage.removeItem('Token');
    } catch (e) {
      console.log(e);
    }
  };

  const updateNickname = async () => {
    try {
      await fetch(`http://localhost:8080/auth/update/${sessionStorage.getItem('Id')}`, {
        method: 'PUT',
        body: nickname,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
      console.log('updated nickname');
    } catch (e) {
      console.log(e);
    }
  };


</script>

<button on:click={deleteUser}>Delete me</button>

<form on:submit|preventDefault={updateNickname}>
  <div class='form-control'>
    <label class='label'>
      <span class='label-text'>New Nickname</span>
    </label>
    <label class='input-group'>
      <span>Nickname</span>
      <input type='text' placeholder='yourNickname' class='input input-bordered' bind:value={nickname} />
    </label>
  </div>
  <button class='btn btn-primary text-white' type='submit'>Update Nickname</button>
</form>
