<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from '../components/announcer.svelte';
  import Transition from '../components/transition.svelte';
  import Home from '../home.svelte';
  import Player from './player/+page.svelte';
  import Upload from './upload-udl/+page.svelte';
  import User from './user/+page.svelte';
  import NavBar from './NavBar.svelte';
  import SideBar from './SideBar.svelte';
  import Main from './Main.svelte';

  let open = false

  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>

<SideBar bind:open/>
<NavBar bind:sidebar={open}/>
<Main/>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<!-- <nav>
  <a href="/">home</a>
  <a href="/player">player</a>
  <a href="/upload-udl">upload</a>
  <a href="/user">user</a>
</nav> -->

<Announcer />
<Transition>
  <Route path="/">
    <Home />
  </Route>
 <Route path="/player">
    <Player />
  </Route>
  <Route path="/upload-udl">
    <Upload />
  </Route>
  <Route path="/user">
    <User />
  </Route>
</Transition>

<foot class="footer" style="font-family: 'IBMPlexMono-Bold', sans-serif" >
<h1>This is our footer | All Rights Reserved 2023</h1>
</foot>

<style>

  /* @import '../../custom-fonts.css'; */
  /* Add any other component-specific styles here */
  /* div {
    position: absolute;
    left: 0;
    top: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
  } */
  :global(body) {
		padding: 0;
	}

  nav {
    display: flex;
    justify-content: center;
    align-items: top;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: bottom;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* .svg {
    width: 136px;
    height: 136px;
  }

  .circle {
    fill: none;
    stroke-width: 4px;
  }

  .progressArc {
    fill: none;
    stroke: hsla(0, 0%, 100%, 0.7);
    stroke-width: 6px;
    transform-origin: center;
    transition: stroke-dasharray 0.3s; */
</style>
