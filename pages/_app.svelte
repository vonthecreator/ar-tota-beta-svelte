<!-- App.svelte -->
<script>
  // Import Svelte's query client and ConnectProvider here
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import { ConnectProvider } from 'arweave-wallet-ui-test';
  import { createGlobalStyle } from 'styled-components';
  
  // Create global styles using styled-components
  const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: inherit;
    }
    * {
      *:focus:not(.focus-visible) {
        outline: none;
      }
    }
    html, body, #root, #__next {
      height: 100%;
      font-family: $body; /* Replace $body with your font family variable */
      margin: 0;
      background-color: inherit;
    }
    #__next {
      position: relative;
      z-index: 0;
    }
    a {
      text-decoration: none;
    }
  `;

  // Create a new query client
  const queryClient = new QueryClient();
</script>

<!-- Apply global styles using styled-components -->
<GlobalStyles />

<!-- Use Svelte's QueryClientProvider and ConnectProvider -->
<QueryClientProvider client={queryClient}>
  <ConnectProvider>
    <Component {...pageProps} />
  </ConnectProvider>
</QueryClientProvider>
