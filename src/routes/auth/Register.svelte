<script>
  import EmailInput from '../../lib/inputs/EmailInput.svelte';
  import PasswordInput from '../../lib/inputs/PasswordInput.svelte';
  import Button from '../../lib/Button.svelte';

  let email;
  let password;
  let result = null;
  let text = 'register';

  async function register() {
    const res = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      body: JSON.stringify({
          email,
          password,
        },
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await res.json();
    result = JSON.stringify(json);
    console.log(result);
  }

</script>

<h1>Register here 🎉</h1>
<form on:submit|preventDefault={register}>
  <div class='form-control'>
    <label class='label'>
      <span class='label-text'>Your Email</span>
    </label>
    <label class='input-group'>
      <span>Email</span>
      <input type='email' placeholder='info@site.com' class='input input-bordered' bind:value={email} />
    </label>
  </div>

  <div class='form-control'>
    <label class='label'>
      <span class='label-text'>Your Password</span>
    </label>
    <label class='input-group'>
      <span>Password</span>
      <input type='password' placeholder='IloveWeb' class='input input-bordered' bind:value={password} />
    </label>
  </div>

  <button class='btn btn-primary text-white' type='submit'>register</button>
</form>
