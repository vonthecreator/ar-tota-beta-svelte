<script lang="ts">
  // import Image from 'next/image';
  import BundlrUploader from './components/BundlrUploader.svelte';

  // Define the component's type if it's not already defined elsewhere
  // You may not need this line if NextPage is already defined in your project
  // type NextPage<P = Record<string, unknown>> = {
  //   (props: P): JSX.Element | null;
  //   getInitialProps?: (ctx: any) => Promise<P>;
  // };
</script>

      <!-- <main class="flex min-h-screen flex-col items-center justify-between p-24">
        <div class="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <BundlrUploader />
        </div>
      </main> -->


<!-- HTML structure -->
<main class="flex min-h-screen flex-col items-center justify-between p-24">
  <div class="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <BundlrUploader />
  </div>
</main>
