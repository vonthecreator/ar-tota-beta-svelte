<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
<<<<<<< HEAD
=======
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';
  // import Image from 'next/image';
  // Define the component's type if it's not already defined elsewhere
  // You may not need this line if NextPage is already defined in your project
  // type NextPage<P = Record<string, unknown>> = {
  //   (props: P): JSX.Element | null;
  //   getInitialProps?: (ctx: any) => Promise<P>;
  // };


  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
>>>>>>> ca56b079adbe8731aba89d29f9a8711c94a27a0f
</script>

<div class="content" style="font-family: 'IBMPlexMono-Bold', sans-serif">
 <hi>This is your user profile | Find your PermaContent</hi>
</div>

<style>
<<<<<<< HEAD
  /* @import '../../custom-fonts.css'; */
</style>
=======
</style>
>>>>>>> ca56b079adbe8731aba89d29f9a8711c94a27a0f
