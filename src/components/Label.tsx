import { styled } from "../theme/stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Text } from "./Text";

export const Label = styled(LabelPrimitive.Root, Text, {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default",

  variants: {
    wrapper: {
      true: {
        lineHeight: "1",
        display: "inline-flex",
        alignItems: "center",
        verticalAlign: "top",
        position: "relative",
        cursor: "pointer",
        gap: "$2",
      },
    },
  },
});
