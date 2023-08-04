<script lang="ts">
  // Import Svelte-specific equivalents
  import { onMount } from 'svelte';
  import fundAndUpload from "../utils/fundAndUpload.svelte";
  import Spinner from "./Spinner.svelte";
  import Carousel from './Carousel.svelte';

  // Define the Tag type
  interface Tag {
    name: string;
    value: string;
  }

  let tags: Tag[] = []; // Add this line to declare the 'tags' variable

  // Define the BundlrUploader component
  export let files: File[] = [];
  let selectedFile: File | null = null;
  let fileType: string = '';

  let licenseFeeType: string = 'None';
  let licenseFeeUnit: number;

  let commercialUse: string = 'None';
  let currency: string = 'U';
  let paymentAddress: string = '';
  let derivation: string = 'None';

  let txProcessing: boolean = false;
  let message: string = '';

// Called when a file is selected
const handleFileUpload = (event: any) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      selectedFile = input.files[0];
      fileType = input.files[0].type;
    }
  };

   // Called when the user clicks the Upload button
   const handleUpload = async () => {
    message = "";
    if (!selectedFile) {
      message = "Please select a file first";
      return;
    }
    txProcessing = true;

    // Validate input
    console.log("licenseFeeType=", licenseFeeType);

    if (licenseFeeType !== "None") {
      console.log("licenseFeeUnit=", licenseFeeUnit);
      if (!licenseFeeUnit || licenseFeeUnit === 0) {
        message = `When selecting a License-Fee of "${licenseFeeType}" you must provide a unit.`;
        return;
      }
    }

    // Build tags
    const tags: Tag[] = [];
    tags.push({ name: 'Content-Type', value: fileType });

    tags.push({ name: 'License', value: 'yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8' });
    if (licenseFeeType !== 'None') tags.push({ name: 'License-Fee', value: licenseFeeType + '-' + licenseFeeUnit });
    if (commercialUse !== 'None') tags.push({ name: 'Commerical-Use', value: commercialUse });
    tags.push({ name: 'Currency', value: currency });
    // Note, I'm not validating payment address here. But you could add an in an extra check to ensure it's a valid address
    if (paymentAddress) tags.push({ name: 'Payment-Address', value: paymentAddress });
    if (derivation) tags.push({ name: 'Derivation', value: derivation });

    // Conditionally fund and upload the file
  const handleUpload = async () => {
    if (selectedFile && tags.length > 0) {
      try {
        const txId = await new fundAndUpload(selectedFile, tags);
        console.log(`File uploaded ==> https://arweave.net/${txId}`);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('Please select a file and add tags before uploading.');
    }
  };

    // Reset the UI spinner
    txProcessing = false;
  };

  // On mount, set the selected file if files prop is provided
  onMount(() => {
    if (files.length > 0) {
      selectedFile = files[0];
      fileType = files[0].type;
    }
  });

  // Function to open file input when clicking the button
  const openFileInput = () => {
    const input = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (input) {
      input.click();
    }
  };
</script>

<!-- HTML structure -->
<div class="w-[400px] bg-gray-800 rounded-lg shadow-2xl p-5">
  <h2 class="text-2xl text-center font-bold mb-4 text-white">Upload File</h2>

  <!--For Carousel implementation-->
  <!-- <Carousel>
    <div>Your default content here</div>
  </Carousel> -->

  <div class="pr-4 mt-5">
    <div class="rounded-lg shadow-2xl">
      <div
        class="rounded-lg p-4 mb-4 text-center"
        on:dragover={(event) => event.preventDefault()}
        on:drop={(event) => {
          event.preventDefault();
          const droppedFiles = Array.from(event.dataTransfer.files);
          files = droppedFiles;
        }}
      >
        <input type="file" on:change={handleFileUpload} class="hidden" />
        {#if !selectedFile}
          <button
            on:click={openFileInput}
            class="px-4 py-2 bg-primary text-black rounded-md border-1 border-gray-600 hover:border-gray-700 hover:bg-primary-dark hover:text-black transition-all duration-500 ease-in-out"
          >
            <!-- Include appropriate icon here if available -->
            Select A File
          </button>
        {:else}
          <span class="px-4 py-2 bg-primary text-white rounded-md border-1">
            {selectedFile.name}
          </span>
        {/if}
      </div>
    </div>
    <div class="flex flex-col bg-gray-800 rounded-lg shadow-2xl p-5">
      <p class="text-white mb-2 underline rounded-md px-1 text-center">Configure UDL</p>

      <label for="license-fee-type" class="text-white text-xs">
        License Fee
      </label>

      <div class="flex flex-row">
        <select
          id="license-fee-type"
          bind:value={licenseFeeType}
          class="bg-primary text-black rounded-md text-xs"
        >
          <option value="None">None</option>
          <option value="One-Time">One-Time</option>
          <option value="Monthly">Monthly</option>
        </select>
        <input
          type="number"
          id="license-fee-unit"
          bind:value={licenseFeeUnit}
          class="bg-primary text-black rounded-md ml-3 text-xs pl-2"
        />
      </div>
      <label for="commerical-use" class="text-white mt-3 underline text-xs">
        Commercial Use
      </label>

      <select
        id="commerical-use"
        bind:value={commercialUse}
        class="bg-primary text-black rounded-md text-xs"
      >
        <option value="None">None</option>
        <option value="Allowed">Allowed</option>
        <option value="Allowed-With-Credit">Allowed-With-Credit</option>
      </select>
      <label for="currency" class="text-white mt-3 underline text-xs">
        Currency
      </label>

      <select
        id="currency"
        bind:value={currency}
        class="bg-primary text-black rounded-md text-xs"
      >
        <option value="U">U</option>
        <option value="AR">Arweave</option>
        <option value="MATIC">Matic</option>
        <option value="ETH">Ethereum</option>
        <option value="SOl">Solana</option>
      </select>

      <label for="payment-address" class="text-white mt-3 underline text-xs">
        Payment Address
      </label>
      <input
        id="payment-address"
        bind:value={paymentAddress}
        class="bg-primary text-black rounded-md text-xs pl-2"
      />
      
      <label for="derivation" class="text-white mt-3 underline text-xs">
        Derivation
      </label>
      <select
        id="derivation"
        bind:value={derivation}
        class="bg-primary text-black rounded-md text-xs"
      >
        <option value="None">None</option>
        <option value="Allowed-With-Credit">Allowed-With-Credit</option>
        <option value="Allowed-With-Indication">Allowed-With-Indication</option>
        <option value="Allowed-With-License-Passthrough">Allowed-With-License-Passthrough</option>
        <option value="Allowed-With-RevenueShare-25%">Allowed-With-RevenueShare-25%</option>
        <option value="Allowed-With-RevenueShare-50%">Allowed-With-RevenueShare-50%</option>
        <option value="Allowed-With-RevenueShare-75%">Allowed-With-RevenueShare-75%</option>
        <option value="Allowed-With-RevenueShare-100%">Allowed-With-RevenueShare-100%</option>
      </select>
    </div>
    {#if message}
      <div class="text-red-500 mt-2">{@html message}</div>
    {/if}
    <button
    class={`mt-5 w-full py-3 px-6 bg-background text-white rounded-md flex items-center justify-center transition-colors duration-500 ease-in-out border-2 rounded-lg shadow-2xl border-gray-600 ${
      txProcessing ? 'bg-primary-dark cursor-not-allowed' : 'hover:bg-primary-dark'
    }`}
    on:click={handleUpload}
    disabled={txProcessing || !(selectedFile && tags.length > 0)}
  >
    {#if txProcessing}
      <Spinner color="text-background" />
    {:else}
      Upload
    {/if}
  </button>
  </div>
</div>

<style>
/* You can add any custom styles here if required */
</style>
