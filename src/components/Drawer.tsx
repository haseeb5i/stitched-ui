import React from "react";
import { styled, keyframes, type CSS } from "@/theme/stitches.config";
import { Button } from "./Button";
import { DialogFooter, DialogBody, DialogTitle } from "./Dialog";
import { CloseIcon } from "@chakra-ui/icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { overlayStyles } from "./Overlay";

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles);

const slideInLeft = keyframes({
  "0%": { opacity: 0, transform: "translateX(-100%)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(DialogPrimitive.Content, {
  display: "flex",
  flexDirection: "column",
  size: "100%",
  maxWidth: "$xs",
  maxHeight: "100vh",
  outline: "transparent solid 2px",
  outlineOffset: 2,
  backgroundColor: "$white",
  boxShadow: "$lg",
  willChange: "transform",
  animation: `${slideInLeft} 300ms ease-out`,

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
type DrawerContentProps = DialogContentPrimitiveProps & {
  css?: CSS;
};

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DrawerContentProps
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

const DrawerTitle = DialogTitle;
const DrawerBody = DialogBody;
const DrawerFooter = DialogFooter;
const DrawerClose = DialogPrimitive.Close;

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
};

export const ExampleDrawer = () => {
  const [open, setIsOpen] = React.useState(false);
  return (
    <Drawer open={open} onOpenChange={setIsOpen}>
      <Button onPointerDown={() => setIsOpen(true)}>Open Drawer</Button>
      <DrawerContent>
        <DrawerTitle>Dialog title</DrawerTitle>
        <DrawerBody>Dialog description</DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button color="teal">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
