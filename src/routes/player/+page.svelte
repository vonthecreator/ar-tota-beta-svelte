<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';


<<<<<<< HEAD
  // router.mode.hash();
  // router.subscribe((_) => window.scrollTo(0, 0));
  // const Route: any = TinroRoute;
</script>
<!-- <nav>
  <a href="/">home</a>
  <a href="/user">user</a>
  <a href="/upload-udl">upload</a>
</nav> -->
=======
  router.mode.hash();
  router.subscribe(() => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
  //   import Image from 'next/image';
  // Define the component's type if it's not already defined elsewhere
  // You may not need this line if NextPage is already defined in your project
  // type NextPage<P = Record<string, unknown>> = {
  //   (props: P): JSX.Element | null;
  //   getInitialProps?: (ctx: any) => Promise<P>;
  // };
</script>


<nav>
  <a href="/">home</a>
  <a href="/user">user</a>
  <a href="/upload">upload</a>
</nav>
>>>>>>> ca56b079adbe8731aba89d29f9a8711c94a27a0f

<!-- <img src="/logo.png" alt="Logo"/> -->

<Announcer />
<Transition>
 <hi class="content" style="font-family: 'IBMPlexMono-Bold', sans-serif">Welcome to our UDL Arweave Player</hi>
</Transition>

<style>
  /* @import '.,/../custom-fonts.css'; */
</style>
