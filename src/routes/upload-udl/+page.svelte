<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';


  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>

<nav>
  <a href="/">home</a>
  <a href="/user">user</a>
  <a href="/player">player</a>
</nav>

<h1>UDL Upload</h1>
<p>Upload ULD content</p>
<img
        src="https://arweave.net/j4__XzhrrllxnwtNSylas_7tOHEJ_m0l-hSYsYcBeqk"
        alt="Logo"
      />


<!-- HTML structure -->
<!-- <main class="flex min-h-screen flex-col items-center justify-between p-24">
  <div class="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <BundlrUploader />
  </div>
</main> -->
