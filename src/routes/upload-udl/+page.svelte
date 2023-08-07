<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
<<<<<<< HEAD
</script>

<div class="content" style="font-family: 'IBMPlexMono-Bold', sans-serif">
<h1>UDL Uploader</h1>
=======
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';
  // import Image from 'next/image';
     import BundlrUploader from '../../components/BundlrUploader.svelte';


  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>


<!--
<nav>
  <a href="/">home</a>
  <a href="/user">user</a>
  <a href="/player">player</a>
</nav>
--->


<h1>UDL Upload</h1>
>>>>>>> ca56b079adbe8731aba89d29f9a8711c94a27a0f
<p>Upload ULD content</p>
</div>

<!-- HTML structure -->
<main class="flex min-h-screen flex-col items-center justify-between p-24">
  <div class="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <BundlrUploader />
  </div>
<<<<<<< HEAD
</main> -->
<style>
  /* @import '../../custom-fonts.css'; */
</style>
=======
</main> 
>>>>>>> ca56b079adbe8731aba89d29f9a8711c94a27a0f
