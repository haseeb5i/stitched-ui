import React from "react";
import { styled, CSS } from "../theme/stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { panelStyles } from "./Panel";
// import { IconButton } from "./IconButton";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.15)",
  position: "fixed",
  inset: 0,
  zIndex: 9,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  minWidth: 200,
  maxHeight: "85vh",
  padding: "$4",
  willChange: "transform",

  "&:focus": {
    outline: "none",
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$2",
  right: "$2",
});

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS };

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton>
          <Cross1Icon />
        </StyledCloseButton>
      </StyledContent>
    </StyledOverlay>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "DialogContent";

const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
};
