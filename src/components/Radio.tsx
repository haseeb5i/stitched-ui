import React from "react";
import { styled, CSS, VariantProps } from "../theme/stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = styled(LabelPrimitive.Root, {
  position: "relative",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
});

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  gap: "$6",
  alignItems: "center"
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "block",
  width: "6px",
  height: "6px",
  borderRadius: "inherit",
  backgroundColor: "$bodyBg",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  userSelect: "none",
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderWidth: 2,
  borderColor: "rgb(226, 232, 240)",
  backgroundColor: "$bodyBg",
  borderRadius: "$full",
  color: "$fg",
  overflow: "hidden",

  "&:focus-visible": {
    boxShadow: "$outline"
  },

  '&[data-state="checked"]': {
    borderColor: "$blue500",
    backgroundColor: "$blue500",
  },

  variants: {
    size: {
      sm: {
        width: "$3",
        height: "$3",
      },
      md: {
        width: "$4",
        height: "$4",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type RadioVariants = VariantProps<typeof StyledRadio>;
type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>;
type RadioProps = RadioGroupItemPrimitiveProps & RadioVariants & { css?: CSS };

export const Radio = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioProps
>(({ children, ...rest }, forwardedRef) => (
  <Label>
    <StyledRadio {...rest} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
    {children}
  </Label>
));

Radio.displayName = "Radio";
