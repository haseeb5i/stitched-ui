import React, { ReactText } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled, css, CSS } from "../theme/stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
// import { menuCss, separatorCss, itemCss, labelCss } from './Menu';
import { Box } from "./Box";
import { Flex } from "./Flex";
import { panelStyles } from "./Panel";

export const baseItemCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "$untitled",
  fontSize: "$1",
  fontVariantNumeric: "tabular-nums",
  lineHeight: "1",
  cursor: "default",
  userSelect: "none",
  whiteSpace: "nowrap",
  height: "$5",
  px: "$5",
});

export const itemCss = css(baseItemCss, {
  position: "relative",
  color: "$hiContrast",

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$blue9",
    color: "white",
  },

  "&[data-disabled]": {
    color: "$slate9",
  },
});

export const labelCss = css(baseItemCss, {
  color: "$slate11",
});

export const menuCss = css({
  boxSizing: "border-box",
  minWidth: 120,
  py: "$1",
});

export const separatorCss = css({
  height: 1,
  my: "$1",
  backgroundColor: "$slate6",
});

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledContent = styled(
  DropdownMenuPrimitive.Content,
  menuCss,
  panelStyles
);

type DropdownMenuContentPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
const DropdownMenuSeparator = styled(
  DropdownMenuPrimitive.Separator,
  separatorCss
);

const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  itemCss
);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
));

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
const StyledDropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem,
  itemCss
);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Flex
          css={{
            width: "$3",
            height: "$3",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            css={{
              width: "$1",
              height: "$1",
              backgroundColor: "currentColor",
              borderRadius: "$round",
            }}
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
));

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
};
