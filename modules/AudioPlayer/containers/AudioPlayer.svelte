<script>
  import { Track } from "@/types";
  import { Flex, Typography } from "@/ui";
  import { useEffect, useState } from "svelte";
  import { AudioPlayer as Component } from "../components/AudioPlayer";
  import { getSong } from "@/lib/api";
  import { licensePaid } from "@/lib/payments";
  import { ConnectWallet } from "arweave-wallet-ui-test";

  export let txid;
  export let gateway = "https://arweave.net";

  let error;
  let tracklist;

  /* FETCH TX & TRANSFORM DATA */

  useEffect(() => {
    console.log("yoooo");
    fetchAndTransform();
  }, []);

  const fetchAndTransform = async () => {
    if (!txid) return;

    try {
      const data = await getSong(gateway, txid);

      tracklist = data;
    } catch (error) {
      console.error(error);
      error = "An error occured trying to fetch your data. Please check you are entering a valid transaction ID.";
    }
  };

  // You can use svelte {#if} blocks to conditionally render elements
</script>

{#if error}
  <Typography>{error}</Typography>
{:else if txid && tracklist}
  <Component tracklist={tracklist} />
{/if}
