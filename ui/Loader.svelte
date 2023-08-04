<!-- Loader.svelte -->
<script>
  import { keyframes, styled } from "svelte";

  const flashing = keyframes({
    "0%": {
      opacity: 0.2,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.2,
    },
  });

  // Define Svelte styled component using the defined styles
  const Wrapper = styled("div")`
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.12);
      margin: 0 4px;
      display: inline-block;

      &:nth-child(1) {
        animation: ${flashing} 1.4s infinite linear;
      }

      &:nth-child(2) {
        animation: ${flashing} 1.4s infinite linear 0.2s;
      }

      &:nth-child(3) {
        animation: ${flashing} 1.4s infinite linear 0.4s;
      }
    }
  `;
</script>

<style>
  /* You can add any additional styles here if needed */
</style>

<!-- Define the Loader component using the Svelte styled component -->
<Wrapper>
  <span></span>
  <span></span>
  <span></span>
</Wrapper>
