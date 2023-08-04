<!-- api.svelte -->
<script lang="ts">
  // Import necessary modules and types
  import Arweave from "arweave";
  import { WarpFactory } from "warp-contracts";

  // Initialize Arweave
  export const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

  // Initialize WarpFactory for mainnet
  export const warp = WarpFactory.forMainnet();
</script>
