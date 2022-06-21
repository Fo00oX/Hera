<script>
  import Footer from './Footer.svelte';
  import { Link, Router } from 'svelte-navigator';
  import RegisterModul from './Modal.svelte';
</script>

<Router>
  <div class='drawer'>
    <input id='my-drawer-3' type='checkbox' class='drawer-toggle border-white '>
    <div class='drawer-content flex flex-col'>
      <!-- Navbar -->
      <div class='w-full navbar bg-primary'>
        <div class='flex-none lg:hidden'>
          <label for='my-drawer-3' class='btn btn-square btn-ghost'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                 class='inline-block w-6 h-6 stroke-current text-white'>
              <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </label>
        </div>
        <h1 class='flex-1'>
          <Link to='/' class='btn btn-ghost normal-case text-xl text-white'>Wiener Wölkchen</Link>
        </h1>
        <div class='flex-none hidden lg:block text-white'>
          <ul class='menu menu-horizontal'>
            <!-- Navbar menu content here -->
            <Link to='/weatherStation' class='btn btn-ghost rounded-lg normal-case'>Weather Station</Link>
            <Link to='/auth/register' class='btn btn-ghost rounded-lg normal-case'>Register</Link>
            <Link to='/auth/login' class='btn btn-ghost rounded-lg normal-case'>Login</Link>
            <Link to='/auth/settings' class='btn btn-ghost rounded-lg normal-case'>Settings</Link>

          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <div class='p-6 mb-auto'>
        <slot></slot>
      </div>
      <Footer />
    </div>
    <div class='drawer-side text-primary'>
      <label for='my-drawer-3' class='drawer-overlay'></label>
      <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
        <!-- Sidebar content here -->
        <Link to='/weatherStation' class='btn btn-ghost rounded-lg normal-case'>Weather Station</Link>
        <Link to='/auth/register' class='btn btn-ghost rounded-lg normal-case'>Register</Link>
        <Link to='/auth/login' class='btn btn-ghost rounded-lg normal-case'>Login</Link>
        <Link to='/auth/settings' class='btn btn-ghost rounded-lg normal-case'>Settings</Link>
      </ul>
    </div>
  </div>
</Router>
