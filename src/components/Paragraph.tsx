import React from "react";
import { Text } from "./Text";
import { VariantProps, CSS } from "../theme/stitches.config";
import merge from "lodash.merge";

const DEFAULT_TAG = "p";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type ParagraphSizeVariants = "md" | "lg";
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  VariantProps<typeof Text>,
  "size"
>;
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { css?: CSS; as?: any };

export const Paragraph = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  ParagraphProps
>((props, forwardedRef) => {
  // '2' here is the default Paragraph size variant
  const { size = "md", ...textProps } = props;

  // This is the mapping of Paragraph Variants to Text variants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants["size"]> = {
    md: { "@initial": "md", "@md": "lg" },
    lg: { "@initial": "lg", "@md": "xl" },
  };

  // This is the mapping of Paragraph Variants to Text css
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    md: { lineHeight: "25px", "@md": { lineHeight: "27px" } },
    lg: {
      color: "$slate11",
      lineHeight: "27px",
      "@md": { lineHeight: "30px" },
    },
  };
  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        ...merge(textCss[size], props.css),
      }}
    />
  );
});

Paragraph.displayName = "Paragraph";
