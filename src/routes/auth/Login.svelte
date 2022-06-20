<script>
  import EmailInput from '../../lib/inputs/EmailInput.svelte';
  import PasswordInput from '../../lib/inputs/PasswordInput.svelte';
  import Button from '../../lib/Button.svelte';

  let email = 'hallo';
  let password = 'letmein';
  let result = null;
  let text = 'login';

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
<EmailInput />
<PasswordInput />
<Button bind:text={text} on:clicked={login} />
