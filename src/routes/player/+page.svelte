<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';


  // router.mode.hash();
  // router.subscribe((_) => window.scrollTo(0, 0));
  // const Route: any = TinroRoute;
</script>
<!-- <nav>
  <a href="/">home</a>
  <a href="/user">user</a>
  <a href="/upload-udl">upload</a>
</nav> -->

<!-- <img src="/logo.png" alt="Logo"/> -->

<Announcer />
<Transition>
 <hi class="content" style="font-family: 'IBMPlexMono-Bold', sans-serif">Welcome to our UDL Arweave Player</hi>
</Transition>

<style>
  /* @import '.,/../custom-fonts.css'; */
</style>
