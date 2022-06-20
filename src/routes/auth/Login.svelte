<script>
  let email = 'hallo';
  let password = 'letmein';
  let result = null;

  async function login() {
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

    result = await res;
    console.log(result);
  }

</script>

<h1>Login here 🎉</h1>
<button on:click={login}>Login</button>
