<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" href="/">Home</a>
		<a class="block" href="/player">Player</a>
        <a class="block" href="#about">Upload</a>
		<a class="block" href="#contact">User</a>
	</nav>
    <main class="flex h-screen w-full justify-center items-center">
        <img src="/arlogo2.png" alt="arLogomenu" style="width: 80px;" />
      </main>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}

	img {
		position: relative;
	}
</style>