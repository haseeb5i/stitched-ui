import React from "react";
import { Text } from "./Text";
import { VariantProps, CSS } from "../theme/stitches.config";
import merge from "lodash.merge";

const DEFAULT_TAG = "h2";

type TextSizeVariants = VariantProps<typeof Text>["size"];
type HeadingSizeVariants =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";
type HeadingVariants = Omit<VariantProps<typeof Text>, "size"> & {
  size?: HeadingSizeVariants;
};
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { size = "4xl", ...textProps } = props;

  const textSize: Record<HeadingSizeVariants, TextSizeVariants> = {
    xs: "sm",
    sm: "md",
    md: "xl",
    lg: { "@initial": "2xl", "@md": "3xl" },
    xl: { "@initial": "3xl", "@md": "4xl" },
    "2xl": { "@initial": "4xl", "@md": "5xl" },
    "3xl": { "@initial": "5xl", "@md": "6xl" },
    "4xl": { "@initial": "6xl", "@md": "7xl" },
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Partial<Record<HeadingSizeVariants, CSS>> = {
    lg: { lineHeight: 1.33, "@md": { lineHeight: 1.2 } },
    xl: { lineHeight: 1.33, "@md": { lineHeight: 1.2 } },
    "2xl": { "@md": { lineHeight: 1 } },
    "3xl": { lineHeight: 1 },
    "4xl": { lineHeight: 1 },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontFamily: "$heading",
        fontWeight: "$bold",
        fontVariantNumeric: "proportional-nums",
        lineHeight: 1.2,
        ...merge(textCss[size], textProps.css),
      }}
    />
  );
});

Heading.displayName = "Heading";
