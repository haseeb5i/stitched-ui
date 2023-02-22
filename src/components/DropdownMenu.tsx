import React from "react";
import {
  CheckIcon,
  HamburgerIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { styled, css, CSS } from "../theme/stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { IconButton } from "./IconButton";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: "$3xs",
  paddingTop: "$2",
  paddingBottom: "$2",
  backgroundColor: "$white",
  boxShadow: "$sm",
  borderRadius: "$md",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  // willChange: "transform, opacity",
  // '&[data-state="open"]': {
  //   '&[data-side="top"]': { animationName: slideDownAndFade },
  //   '&[data-side="right"]': { animationName: slideLeftAndFade },
  //   '&[data-side="bottom"]': { animationName: slideUpAndFade },
  //   '&[data-side="left"]': { animationName: slideRightAndFade },
  // },
});

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

export const baseItemCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "default",
  userSelect: "none",
  whiteSpace: "nowrap",
  paddingBlock: "$1-5",
  paddingInline: "$3",
});

export const itemCss = css(baseItemCss, {
  position: "relative",

  "&[data-highlighted]": {
    backgroundColor: "$gray200",
    outline: "none",
  },

  "&[data-disabled]": {
    color: "$slate9",
  },
});

const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, baseItemCss, {
  color: "$blue500",
});
const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  my: "$1",
  backgroundColor: "$slate6",
});

// checkbox item in dropdown
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

// radio elements in dropdown
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

export const ExampleDropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="Customise options">
          <HamburgerIcon />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem>
          New Tab <RightSlot>⌘+T</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <RightSlot>⌘+N</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window <RightSlot>⇧+⌘+N</RightSlot>
        </DropdownMenuItem>
        {/* <DropdownMenuPrimitive.Sub>
          <DropdownMenuSubTrigger>
            More Tools
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
          </DropdownMenuSubTrigger>
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Sub> */}
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          // onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks <RightSlot>⌘+B</RightSlot>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          // onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        {/* <DropdownMenuArrow /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: "$blue500",
  "[data-disabled] &": { color: "$blue300" },
});
