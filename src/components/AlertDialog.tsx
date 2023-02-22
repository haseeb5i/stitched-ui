import React from "react";
import { styled, CSS } from "../theme/stitches.config";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { overlayStyles } from "./Overlay";
import { panelStyles } from "./Panel";
import { contentShow } from "@/theme";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  display: "grid",
  placeItems: "start center",
});

export const StyledContent = styled(AlertDialogPrimitive.Content, panelStyles, {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  outline: "transparent solid 2px",
  outlineOffset: 2,
  borderRadius: "$md",
  backgroundColor: "$white",
  color: "inherit",
  marginTop: "$16",
  marginBottom: "$16",
  zIndex: 10,
  boxShadow: "$lg",
  maxWidth: "$md",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "&:focus": {
    outline: "none",
  },
});

type AlertDialogContentPrimitiveProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Content
>;
type AlertDialogContentProps = AlertDialogContentPrimitiveProps & { css?: CSS };

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </StyledOverlay>
  </AlertDialogPrimitive.Portal>
));

AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
  flex: "0 1 0%",
  paddingInline: "$6",
  paddingTop: "$4",
  paddingBottom: "$4",
  fontSize: "$lg",
  fontWeight: "$bold",
});

const AlertDialogBody = styled(AlertDialogPrimitive.Description, {
  flex: "1 1 0%",
  paddingInline: "$6",
  paddingTop: "$2",
  paddingBottom: "$2",
});

const AlertDialogFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingInline: "$6",
  paddingTop: "$4",
  paddingBottom: "$4",
  gap: "$3",
});

const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};

// example alert dialog
export const ExampleAlertDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Trigger</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete Customer</AlertDialogTitle>
        <AlertDialogBody>
          Are you sure? You can't undo this action afterwards.
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
