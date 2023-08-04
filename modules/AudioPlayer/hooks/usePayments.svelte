<script>
  import { createSignal } from "svelte";

  export function usePayments() {
    let [licensePaid, setLicensePaid] = createSignal(false);

    return {
      licensePaid,
      setLicensePaid,
    };
  }
</script>
