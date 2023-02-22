import React from "react";
import { styled, CSS } from "../theme/stitches.config";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { panelStyles } from "./Panel";
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from "@/theme";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  // position: relative;
  // display: flex;
  // flex-direction: column;
  $$popperArrowBg: "$white",
  $$popperArrowShadowColor: "$gray200",
  backgroundColor: "$white",
  width: "$xs",
  border: "1px solid $colors$borderColor",
  borderRadius: "$md",
  boxShadow: "$sm",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:focus": {
    outline: "none",
  },
});

const PopoverTitle = styled("header", {
  paddingInline: "$3",
  paddingTop: "$2",
  paddingBottom: "$2",
  borderBottom: "1px solid $colors$borderColor",
});

const PopoverBody = styled("div", {
  paddingInline: "$3",
  paddingTop: "$2",
  paddingBottom: "$2",
});

const PopoverFooter = styled("footer", {
  paddingInline: "$3",
  paddingTop: "$2",
  paddingBottom: "$2",
  borderTop: "1px solid $colors$borderColor",
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

type PopoverContentPrimitiveProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>;
type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, ...props }, fowardedRef) => (
  <PopoverPrimitive.Portal>
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      <PopoverArrow />
    </StyledContent>
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = "PopoverContent";

const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };

// popover example
export const ExamplePopover = () => {
  return (
    <Popover>
      <PopoverTrigger>Popover Trigger</PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Confirmation!</PopoverTitle>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        <PopoverFooter>Yeah</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
