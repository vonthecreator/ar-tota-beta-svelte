<script lang="ts">
	import { onMount } from 'svelte';
	import { type Metadata } from 'next';
	import { Inter, Roboto } from 'next/font/google';
  
	// Define the metadata type if it's not already defined elsewhere
	// You may not need this line if Metadata is already defined in your project
	// interface Metadata { title: string; description: string; }
  
	export let children;
  
	export const metadata: Metadata = {
	  title: 'Upload File',
	  description: 'Upload a file with UDL attached to it',
	};
  
	const roboto = Roboto({
	  weight: '400',
	  subsets: ['latin'],
	  display: 'swap',
	});
  
	// If loading a variable font, you don't need to specify the font weight
	const inter = Inter({
	  subsets: ['latin'],
	  display: 'swap',
	});
  
	// Apply the font classes to the body element after the component mounts
	onMount(() => {
	  document.documentElement.classList.add(roboto.className);
	  document.body.classList.add(roboto.className);
	});
  </script>
  
  <style>
	/* Global CSS styles can be added here if required */
	@import './globals.css';
  </style>
  
  <!-- HTML structure -->
  <html lang="en">
	<body class:roboto>
	  {children}
	</body>
  </html>
  