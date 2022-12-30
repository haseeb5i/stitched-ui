import { styled } from "../theme/stitches.config";

export const Button = styled("button", {
  // position: relative;
  display: "inline-flex",
  gap: "$2",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: "$md",
  appearance: "none",
  userSelect: "none",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  fontWeight: "$semibold",
  lineHeight: 1.2,
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  // need to override this in some cases
  paddingInline: "$$btnPaddingX",

  "&:disabled": {
    boxShadow: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },

  // can be bundled with compound variants if needed
  "&:focus-visible": {
    boxShadow: "$outline",
  },

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        height: "$6",
        minWidth: "$6",
        $$btnPaddingX: "$space$2",
      },
      sm: {
        fontSize: "$sm",
        height: "$8",
        minWidth: "$8",
        $$btnPaddingX: "$space$3",
      },
      md: {
        fontSize: "$md",
        height: "$10",
        minWidth: "$10",
        $$btnPaddingX: "$space$4",
      },
      lg: {
        fontSize: "$lg",
        height: "$12",
        minWidth: "$12",
        $$btnPaddingX: "$space$6",
      },
    },
    color: {
      teal: {
        // for outline and ghost variants
        color: "$teal600",
        borderColor: "currentColor",
        "&:hover": {
          backgroundColor: "$teal50",
        },
        "&:active": {
          backgroundColor: "$teal100",
        },
      },
      gray: {
        color: "inherit",
        borderColor: "$gray200",
        "&:hover": {
          backgroundColor: "$gray100",
        },
        "&:active": {
          backgroundColor: "$gray200",
        },
      },
    },
    variant: {
      solid: {},
      outline: {
        borderWidth: "1px",
        backgroundColor: "transparent", // bg is already transparent?
      },
      ghost: {
        backgroundColor: "transparent",
      },
    },
    auto: {
      true: {
        width: "auto",
        minWidth: "min-content",
      },
    },
  },
  compoundVariants: [
    // color + solid variant
    {
      variant: "solid",
      color: "teal",
      css: {
        backgroundColor: "$teal500",
        color: "$white",
        "&:hover": {
          backgroundColor: "$teal600",
        },
        "&:active": {
          backgroundColor: "$teal700",
        },
      },
    },
    {
      variant: "solid",
      color: "gray",
      css: {
        backgroundColor: "$gray100",
        "&:hover": {
          backgroundColor: "$gray200",
        },
        "&:active": {
          backgroundColor: "$gray300",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "gray",
  },
});
