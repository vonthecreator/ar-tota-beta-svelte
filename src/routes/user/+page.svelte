<script lang="ts">
<<<<<<< HEAD
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../../components/announcer.svelte';
  import Transition from '../../components/transition.svelte';
  import Home from '../../home.svelte';
  // import Player from './player/+page.svelte';
  // import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';
=======
  // import Image from 'next/image';
  // Define the component's type if it's not already defined elsewhere
  // You may not need this line if NextPage is already defined in your project
  // type NextPage<P = Record<string, unknown>> = {
  //   (props: P): JSX.Element | null;
  //   getInitialProps?: (ctx: any) => Promise<P>;
  // };
</script>
>>>>>>> c854fc9 (connected routes --> [src])


  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>
<nav>
  <a href="/">home</a>
  <a href="/player">player</a>
  <a href="/upload-udl">upload</a>
</nav>


<img
        src="https://arweave.net/j4__XzhrrllxnwtNSylas_7tOHEJ_m0l-hSYsYcBeqk"
        alt="Logo"
      />
<Announcer />
<Transition>
 <hi>Uploads</hi>
</Transition>

<style>
</style>