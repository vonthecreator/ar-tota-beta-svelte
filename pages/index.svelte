<!-- Home.svelte -->
<script>
  import { useEffect, useState } from 'svelte';
  import { AudioPlayer } from '@/modules/AudioPlayer/containers/AudioPlayer.svelte';
  import { useRouter } from 'next/router';
  import { Flex, Loader } from '@/ui';
  import { ConnectWallet } from 'arweave-wallet-ui-test.svelte';

  let txid;

  const router = useRouter();

  useEffect(() => {
    if (router.query.tx) {
      txid = router.query.tx;
    } else {
      console.log('No txid provided');
    }
  }, [router.query.tx]);
</script>

<svelte:head>
  <title>AR-1</title>
  <meta name="description" content="Generated by create next app" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="favicon.ico" />
</svelte:head>

<Flex
  css={{
    height: '100%',
  }}
  align="center"
  justify="center"
>
  {#if txid}
    <AudioPlayer txid={txid} />
  {:else}
    <Loader />
  {/if}
</Flex>
