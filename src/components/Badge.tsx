import { styled } from "../theme/stitches.config";

export const Badge = styled("span", {
  display: "inline-block",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  textTransform: "uppercase",
  fontWeight: "$bold",
  borderRadius: "$sm",

  paddingInline: "$1",
  fontSize: "$xs",

  variants: {
    variant: {
      solid: {
        background: "$$badgeMain",
        color: "$white",
      },
      outline: {
        boxShadow: "inset 0 0 0px 1px $$badgeMain",
        color: "$$badgeMain",
      },
      subtle: {
        color: "$$badgeColor",
        background: "$$badgeBg",
      },
    },
    // implement as needed
    size: {},
    color: {
      gray: {
        $$badgeBg: "$colors$gray100",
        $$badgeColor: "$colors$gray800",
        $$badgeMain: "$colors$gray500",
      },
      green: {
        $$badgeBg: "$colors$green100",
        $$badgeColor: "$colors$green800",
        $$badgeMain: "$colors$green500",
      },
      red: {
        $$badgeBg: "$colors$red100",
        $$badgeColor: "$colors$red800",
        $$badgeMain: "$colors$red500",
      },
    },
  },
  defaultVariants: {
    color: "gray",
    variant: "subtle",
  },
});
