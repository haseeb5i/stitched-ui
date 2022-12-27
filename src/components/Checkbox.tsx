import React from "react";
import { styled, CSS, VariantProps } from "../theme/stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@chakra-ui/icons";

const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  appearance: "none",
  lineHeight: "1",
  backgroundColor: "transparent",
  borderWidth: "2px",
  borderColor: "$gray200",
  borderRadius: "$sm",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  overflow: "hidden",
  outline: "none",

  "&:hover": {
    boxShadow: "inset 0 0 0 1px $colors$slate8",
  },
  "&:focus-visible": {
    boxShadow: "$outline",
  },
  '&[data-state="checked"]': {
    backgroundColor: "$blue500",
    borderColor: "$blue500",
    "&:hover": {
      backgroundColor: "$blue600",
      borderColor: "$blue600",
    },
  },

  variants: {
    size: {
      sm: {
        size: "$3",
      },
      md: {
        size: "$4",
      },
      lg: {
        size: "$5",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  size: "100%",
});

type CheckboxPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;
type CheckboxVariants = VariantProps<typeof CheckboxRoot>;
type CheckboxProps = Omit<CheckboxPrimitiveProps, "children"> &
  CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxRoot>,
  CheckboxProps
>((props, forwardedRef) => (
  <CheckboxRoot {...props} ref={forwardedRef}>
    <CheckboxIndicator>
      {/* replace check icon if needed */}
      <CheckIcon />
    </CheckboxIndicator>
  </CheckboxRoot>
));

Checkbox.displayName = "Checkbox";
