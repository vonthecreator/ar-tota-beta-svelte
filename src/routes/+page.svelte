<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../components/announcer.svelte';
  import Transition from '../components/transition.svelte';
  import Home from '../home.svelte';
  import Player from './player/+page.svelte';
  import Upload from './upload-udl/+page.svelte';
  // import User from './user/+page.svelte';


  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>

<Announcer />
<Transition>
  <nav>
    <a href="/">home</a>
    <a href="/player">player</a>
    <!-- <a href="/user">user</a>
    <a href="/upload-udl">upload</a> -->
  </nav>

  <Route path="/">
    <Home />
  </Route>

 <Route path="/player">
    <Player />
  </Route>

  <Route path="/upload-udl">
    <Upload />
  </Route>
 <!-- 
  <Route path="/user">
    <User />
  </Route> -->
</Transition>

<style>
</style>
