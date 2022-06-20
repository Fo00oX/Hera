<script>
  import EmailInput from '../../lib/inputs/EmailInput.svelte';
  import PasswordInput from '../../lib/inputs/PasswordInput.svelte';
  import Button from '../../lib/Button.svelte';

  let email = 'hallo';
  let password = 'letmein';
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
<EmailInput />
<PasswordInput />
<Button bind:text={text} on:clicked={register} />
