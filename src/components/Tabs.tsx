import { styled } from "../theme/stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
});

export const TabsList = styled(TabsPrimitive.List, {
  display: "flex",
  justifyContent: "flex-start",
  flexShrink: 0,
  borderBottomWidth: "2px",
  borderColor: "$gray200",

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $slate8, 0 0 0 1px $slate8",
  },

  variants: {
    size: {
      sm: {
        button: {
          fontSize: "$sm",
          padding: "$1 $4",
        },
      },
      md: {
        button: {
          fontSize: "$md",
          padding: "$2 $4",
        },
      },
      lg: {
        button: {
          fontSize: "$lg",
          padding: "$3 $4",
        },
      },
    },
    variant: {
      default: {
        button: {
          borderColor: "transparent",
          borderBottomWidth: "2px",
          marginBottom: "-2px",
          "&:active": {
            backgroundColor: "$gray200",
          },
          // can be moved to variant color: blue
          '&[data-state="active"]': {
            color: "$blue600",
            borderColor: "currentcolor",
          },
        },
      },
      "soft-rounded": {
        border: "none",
        button: {
          fontWeight: "$semibold",
          color: "$gray600",
          borderRadius: "$full",
          // can be moved to compound variant of soft-rounded + blue
          '&[data-state="active"]': {
            color: "$blue700",
            backgroundColor: "$blue100",
          },
        },
      },
    },
    expand: {
      true: {
        button: {
          flex: "1 1 0%",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  transitionProperty: "background-color, border-color, color",
  transitionDuration: "200ms",
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: "$4",
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $slate8, 0 0 0 1px $slate8",
  },
});
