import React from "react";
import { styled, CSS } from "../theme/stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { CloseIcon } from "@chakra-ui/icons";
import { overlayStyles } from "./Overlay";
import { contentShow } from "@/theme";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const StyledContent = styled(DialogPrimitive.Content, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "$md",
  maxHeight: "85vh",
  outline: "transparent solid 2px",
  outlineOffset: 2,
  borderRadius: "$md",
  backgroundColor: "$white",
  marginBlock: "$16",
  willChange: "transform",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  boxShadow: "$lg",

  "&:focus": {
    outline: "none",
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$2",
  right: "$2",
  fontSize: "$xs",
  $$closeButtonSize: "$sizes$8",
  width: "$$closeButtonSize",
  height: "$$closeButtonSize",
  backgroundColor: "$$closeButtonBg",
  borderRadius: "$md",
  dflex: "center",

  "&:hover": {
    $$closeButtonBg: "rgba(0, 0, 0, 0.06)",
  },
});

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps & {
  css?: CSS;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton>
          <CloseIcon />
        </StyledCloseButton>
      </StyledContent>
    </StyledOverlay>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "DialogContent";

const DialogTitle = styled(DialogPrimitive.Title, {
  flex: "0 1 0%",
  fontSize: "$xl",
  fontWeight: "$semibold",
  paddingInline: "$6",
  paddingBlock: "$4",
});

const DialogBody = styled(DialogPrimitive.Description, {
  flex: "1 1 0%",
  paddingInline: "$6",
  paddingBlock: "$2",
});

const DialogFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingInline: "$6",
  paddingBlock: "$4",
});

const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogBody,
  DialogFooter,
};

export const ExampleDialog = () => {
  const [open, setIsOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>Open</DialogTrigger> */}
      <Button onPointerDown={() => setIsOpen(true)}>Open Dialog</Button>
      <DialogContent>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogBody>Dialog description</DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button color="teal">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
