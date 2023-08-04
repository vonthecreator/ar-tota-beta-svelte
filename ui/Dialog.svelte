<!-- Dialog.svelte -->
<script>
  import { keyframes } from "svelte";
  import * as DialogPrimitive from "@radix-ui/react-dialog";
  import { styled } from "stitches.config";

  const overlayShow = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  // Define overlay styles
  const overlayStyle = `
    background-color: rgba(8, 8, 8, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    
    @media (prefers-reduced-motion: no-preference) {
      animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  `;

  // Define content styles
  const contentStyle = `
    br: $3;
    background-color: $slate1;
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.08);
    position: absolute;
    m: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    overflow: hidden;
    &:focus {
      outline: none;
    }
    p: $5;
  `;

  // Define Svelte styled components using the defined styles
  const StyledOverlay = styled(DialogPrimitive.Overlay)`
    ${overlayStyle}
  `;

  const StyledDialogContent = styled(DialogPrimitive.Content)`
    ${contentStyle}
  `;

  // Define DialogContentProps type
  export type DialogContentProps = ComponentProps<typeof StyledDialogContent> &
    DialogPrimitive.PortalProps & {
      portal?: boolean;
    };

  // Define the missing exports
  export const Dialog = DialogPrimitive.Root;
  export const DialogOverlay = StyledOverlay;
  export const DialogPortal = DialogPrimitive.Portal;
  export const DialogTrigger = styled(DialogPrimitive.Trigger);
  export const DialogTitle = styled(DialogPrimitive.Title);
  export const DialogDescription = styled(DialogPrimitive.Description);
  export const DialogClose = styled(DialogPrimitive.Close, {
    variants: {
      pos: {
        absolute: {
          position: "absolute",
          top: "$5",
          right: "$5",
        },
        relative: {
          position: "relative",
          top: 0,
          right: 0,
        },
      },
    },
    defaultVariants: {
      pos: "absolute",
    },
  });

  // You can export StyledDialogContent if needed, but it's not required.
  // export { StyledDialogContent };
</script>

<style>
  /* You can add any additional styles here if needed */
</style>

<!-- Define Svelte components using the Svelte styled components -->
<StyledOverlay>
  <StyledDialogContent>
    <slot />
  </StyledDialogContent>
</StyledOverlay>
