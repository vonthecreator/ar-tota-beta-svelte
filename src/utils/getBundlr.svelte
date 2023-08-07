<!-- getBundlr.svelte -->
<script lang="ts">
  // Import necessary modules and types
  import { ethers, utils, JsonRpcSigner } from 'ethers';
  import { WebBundlr } from '@bundlr-network/client';
  import BigNumber from 'bignumber.js';

  // Augment Window interface to include ethereum property
  interface Window {
    ethereum?: any;
  }

  // Define the type for the Tx object
  interface Tx {
    from: string;
    to: string;
    blockHeight?: BigNumber;
    amount: BigNumber;
    pending: boolean;
    confirmed: boolean;
  }

  // Define the getBundlr function
  const getBundlr = async (
    url = 'https://devnet.bundlr.network',
    currency = 'matic',
    providerUrl = 'https://rpc-mumbai.maticvigil.com'
  ) => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const getGasPrice = async () => {
      const feeData = await provider.getFeeData();
      const gp = +(feeData?.gasPrice?.toString() ?? 0);
      console.log('getGasPrice', gp, typeof gp);
      return utils.parseUnits(gp.toString(), 'wei'); // Convert gas price to a bigint value
    };

    const e = provider.estimateGas.bind(provider);
    provider.estimateGas = async (tx: ethers.TransactionRequest) => {
      const est = await e(tx);
      return utils.parseUnits(est.toString(), 'wei'); // Return a bigint value
    };

    // Use ethers.JsonRpcSigner instead of ethers.Signer
    const signer: JsonRpcSigner = await provider.getSigner();
    signer.estimateGas = e;

    // Add getGasPrice method to the provider
    provider.getGasPrice = getGasPrice;

    // Use signTypedData directly instead of _signTypedData
    signer.signTypedData = (domain: any, types: any, value: any) =>
      signer.signTypedData(domain, types, value);

      const bundlr = new WebBundlr(url, currency, provider, {
      providerUrl,
    });

    bundlr.currencyConfig.createTx = async (amount: string, to: string) => {
      const estimatedGas = await signer.estimateGas({ to, from: bundlr.address });
      const gasPrice = await provider.getGasPrice();
      const txr = await signer.populateTransaction({
        to,
        from: bundlr.address,
        value: utils.parseUnits(amount, 'wei'), // Convert amount to bigint value
        gasPrice,
        gasLimit: Number(estimatedGas), // Convert bigint to number
      });
      return { txId: undefined, tx: txr };
    };

    bundlr.currencyConfig.createTx = async (amount: string, to: string) => {
      const estimatedGas = await signer.estimateGas({ to, from: bundlr.address });
      const gasPrice = await provider.getGasPrice();
      const txr = await signer.populateTransaction({
        to,
        from: bundlr.address,
        value: utils.parseUnits(amount, 18), // Convert amount to a BigNumber with 18 decimal places
        gasPrice,
        gasLimit: Number(estimatedGas), // Convert bigint to number
      });

      // Convert the txr.value (which is a bigint) to string using toString()
      return { txId: undefined, tx: { ...txr, value: txr.value.toString() } };
    };
    await bundlr.ready();
    console.log('bundlr=', bundlr);

    return bundlr;
  };
</script>
