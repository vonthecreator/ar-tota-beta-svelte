<script context="module">
    import { Router } from '@sveltejs/kit';
    import Home from '../home.svelte';
    import Player from './player/User.svelte';
    // import Upload from './upload-udl/+page.svelte';
    // import User from './user/+page.svelte';
  
    export let session; // If you need session data
    export const router = new Router();
    router.configure({
      '/': Home,
      '/player': Player,
      // Add other routes here
    });
  </script>
  
  <Announcer />
  <Transition>
    <nav>
      <a href="/">home</a>
      <a href="/player">player</a>
      <!-- Add other navigation links here -->
    </nav>
  
    <Route {router}/>
  </Transition>
  
  <style>
  </style>
  