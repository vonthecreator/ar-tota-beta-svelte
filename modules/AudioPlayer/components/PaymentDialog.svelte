<script>
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
  } from "@/ui/Dialog";
  import { RxCheck, RxCross2 } from "react-icons/rx";
  import { setContext, getContext } from "svelte";
  import { Image } from "@/ui/Image";
  import {
    useMutation,
    useQueryClient,
    useQuery,
    queryKey,
  } from "@tanstack/react-query";
  import { licensePaid, makePayment } from "@/lib/payments";
  import { getLicenseInfo } from "@/lib/api";
  import { useConnect } from "arweave-wallet-ui-test";

  export let open = false;
  export let onClose = () => {};
  export let licensePaid = false;
  export let fee;
  export let txid;
  export let walletAddress;

  let submittingPayment = false;
  let paymentSuccess = false;
  let paymentError = false;

  let paymentMutation = useMutation({
    mutationFn: () => makePayment(txid, walletAddress),
    onSuccess: (data) => {
      submittingPayment = false;
      paymentSuccess = true;
      console.log("id", data);
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [`license-info-${txid}`, `license-paid-${txid}`],
        });
        onClose();
      }, 1000);
    },
    onError: (error) => {
      document.body.style.pointerEvents = "none";
      submittingPayment = false;
      paymentError = true;
      console.error("Payment Error:", error.message);
    },
  });

  let parentRef;

  // Pass the parentRef to the context so Dialog can access it
  setContext("dialog-parent-ref", parentRef);

  // Get the parentRef from the context
  let getParentRef = () => getContext("dialog-parent-ref");
  $: parentRef = getParentRef();
</script>

<Dialog open={open} onOpenChange={() => onClose()}>
  <DialogPortal container={parentRef}>
    <DialogOverlay
      css={{
        backdropFilter: "blur(3px)",
      }}
    />
    <DialogContent
      css={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "$5",
      }}
    >
      {#if fee !== undefined}
        <DialogTitle asChild>
          <Typography
            css={{ maxWidth: "14ch", textAlign: "center" }}
            contrast="high"
            size="7"
            weight="6"
          >
            Pay one-time fee of {fee} $U to listen to the full track
          </Typography>
        </DialogTitle>
      {/if}
      <Button
        css={{
          "& svg": {
            color: paymentError ? "hsl(358, 75.0%, 59.0%)" : "hsl(151, 55.0%, 41.5%)",
          },
        }}
        on:click={async () => {
          // fixes window focusing issue between arweave.app iframe and tanstack query
          document.body.style.pointerEvents = "auto";
          if (walletAddress) {
            submittingPayment = true;
            paymentMutation.mutate();
          } else {
            try {
              await window.arweaveWallet.connect([
                "ACCESS_ADDRESS",
                "ACCESS_ALL_ADDRESSES",
                "DISPATCH",
                "SIGN_TRANSACTION",
              ]);
              submittingPayment = true;
              paymentMutation.mutate();
            } catch (error) {
              console.error("Error connecting wallet: " + error.message);
            }
          }
        }}
        disabled={submittingPayment}
      >
        {!licensePaid &&
          !paymentSuccess &&
          !paymentError &&
          !submittingPayment &&
          `Pay ${fee} $U`}
        {submittingPayment && "Processing payment..."}
        {paymentSuccess && !submittingPayment && "Payment successful"}
        {paymentError && !submittingPayment && "Payment error"}
        {paymentSuccess && !submittingPayment && <RxCheck />}
        {paymentError && !submittingPayment && <RxCross2 />}
      </Button>
      <DialogClose asChild>
        <IconButton
          css={{
            "& svg": {
              size: "$10",
              color: "$whiteA11",
            },
          }}
          on:click={() => onClose()}
        >
          <RxCross2 />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</Dialog>
