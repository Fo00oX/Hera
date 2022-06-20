<script>
  let email = 'hallo';
  let password = 'letmein';
  let result = null;

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
<button on:click={register}>Register</button>
