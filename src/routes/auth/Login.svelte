<script>

  let email;
  let password;
  let text = 'login';

  async function setToken(res) {
    const json = await res.json();
    const token = json.token;
    console.log(token);
    // const response = JSON.stringify(json);
    // const token = response.substring(10, response.length - 2);
    localStorage.setItem('Token', token);
  }

  async function login() {
    console.log(email);
    console.log(password);
    const res = await fetch('http://localhost:8080/auth/login', {
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
    if (!localStorage.getItem('Token')) {
      await setToken(res);
    }
  }

</script>

<h1>Login here 🎉</h1>
<form on:submit|preventDefault={login}>
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

  <button class='btn btn-primary text-white' type='submit'>login</button>
</form>
