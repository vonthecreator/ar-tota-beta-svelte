<!-- Document.svelte -->
<script>
  import { Html, Head, Main, NextScript } from 'next/document';
  import { getCssText } from 'stitches.config';
</script>

<html lang="en">
  <head>
    <style id="stitches">
      {#html}
      {getCssText()}
      {/html}
    </style>
  </head>
  <body>
    <Main />
    <NextScript />
  </body>
</html>
