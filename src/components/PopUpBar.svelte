<script lang="ts">
  import Spinner from "./Spinner.svelte";

  // Define the Tag type
  interface Tag {
    name: string;
    value: string;
  }

  export let visible: boolean;
  export let onClose: () => void;
  export let selectedFile: File | null;
  export let handleFileUpload: (event: any) => void;
  export let licenseFeeType: string;
  export let setLicenseFeeType: (value: string) => void;
  export let licenseFeeUnit: number | undefined;
  export let setLicenseFeeUnit: (value: number | undefined) => void;
  export let commercialUse: string;
  export let setCommercialUse: (value: string) => void;
  export let currency: string;
  export let setCurrency: (value: string) => void;
  export let paymentAddress: string;
  export let setPaymentAddress: (value: string) => void;
  export let derivation: string;
  export let setDerivation: (value: string) => void;
  export let txProcessing: boolean;
  export let handleUpload: () => void;
  export let message: string;
</script>

<!-- HTML structure -->
<div
  class={`fixed top-0 right-0 h-full bg-gray-800 w-64 transform ${
    visible ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out z-10`}
>
  <h2 class="text-2xl text-center font-bold mb-4 text-white">Upload File</h2>

  <div class="pr-4 mt-5">
    <!-- Drag and drop area -->
    <!-- ... (rest of the code for drag and drop area) -->
    <!-- End of drag and drop area -->

    <div class="flex flex-col bg-gray-800 rounded-lg shadow-2xl p-5">
      <p class="text-white mb-2 underline rounded-md px-1 text-center">Configure UDL</p>

      <!-- License Fee -->
      <!-- ... (rest of the code for License Fee) -->
      <!-- End of License Fee -->

      <!-- Commercial Use -->
      <!-- ... (rest of the code for Commercial Use) -->
      <!-- End of Commercial Use -->

      <!-- Currency -->
      <!-- ... (rest of the code for Currency) -->
      <!-- End of Currency -->

      <!-- Payment Address -->
      <!-- ... (rest of the code for Payment Address) -->
      <!-- End of Payment Address -->

      <!-- Derivation -->
      <!-- ... (rest of the code for Derivation) -->
      <!-- End of Derivation -->
    </div>
    {#if message}
      <div class="text-red-500 mt-2">
        {@html message}
      </div>
    {/if}
    <button
      class={`mt-5 w-full py-3 px-6 bg-background text-white rounded-md flex items-center justify-center transition-colors duration-500 ease-in-out border-2 rounded-lg shadow-2xl border-gray-600 ${
        txProcessing ? "bg-primary-dark cursor-not-allowed" : "hover:bg-primary-dark"
      }`}
      on:click={handleUpload}
      disabled={txProcessing}
    >
      {#if txProcessing}
        <Spinner color="text-background" />
      {:else}
        Upload
      {/if}
    </button>
  </div>

  <!-- Close button -->
  <button
    class="px-4 py-2 bg-primary text-white rounded-md absolute top-4 right-4"
    on:click={onClose}
  >
    Close
  </button>
</div>

<style>
/* Add any custom styles here if required */
</style>
