import { Button } from "./Button";
import { styled } from "../theme/stitches.config";

export const IconButton = styled(Button, {
  padding: 0,
  // temporay styles for experimenting
  svg: {
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    color: "currentColor",
    lineHeight: "1em",
  },
  variants: {
    rounded: {
      true: {
        borderRadius: "$full",
      },
    },
  },
});
