import React from "react";
import { styled, VariantProps, CSS } from "../theme/stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  size: "$$switchTrackHeight",
  backgroundColor: "white",
  borderRadius: "inherit",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;",
  transition: "transform 100ms cubic-bezier(0.22, 1, 0.36, 1)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX($$switchThumbX)",
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  userSelect: "none",

  // Reset
  boxSizing: "content-box",
  display: "inline-flex",
  justifyContent: "flex-start",
  lineHeight: "1",
  padding: "$0-5",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  borderRadius: "$full",
  position: "relative",

  $$switchTrackWidth: "1.875rem",
  $$switchTrackHeight: "$sizes$4",
  $$switchThumbX: "calc($$switchTrackWidth - $$switchTrackHeight)",
  $$switchBg: "$colors$gray300",
  backgroundColor: "$$switchBg",
  width: "$$switchTrackWidth",
  height: "$$switchTrackHeight",

  "&:focus-visible": {
    boxShadow: "$outline",
  },
  '&[data-state="checked"]': {
    backgroundColor: "$blue500",
  },

  variants: {
    size: {
      sm: {
        $$switchTrackWidth: "1.375rem",
        $$switchTrackHeight: "$sizes$3",
      },
      md: {},
      lg: {
        $$switchTrackWidth: "2.875rem",
        $$switchTrackHeight: "$sizes$6",
      },
    },
  },
});

type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
>;
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };

export const Switch = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  SwitchProps
>((props, forwardedRef) => (
  <StyledSwitch {...props} ref={forwardedRef}>
    <StyledThumb />
  </StyledSwitch>
));

Switch.displayName = "Switch";
