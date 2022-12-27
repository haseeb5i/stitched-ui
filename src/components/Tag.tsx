import { Badge } from "./Badge";
import { styled } from "../theme/stitches.config";

export const Tag = styled(Badge, {
  display: "inline-flex",
  verticalAlign: "top",
  alignItems: "center",
  gap: "$2",
  maxWidth: "100%",
  fontWeight: "$medium",
  lineHeight: "1.2",
  borderRadius: "$md",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  textTransform: "none",

  variants: {
    size: {
      sm: {
        minSize: "$5",
        fontSize: "$xs",
        paddingInline: "$2",
      },
      md: {
        minSize: "$6",
        fontSize: "$sm",
        paddingInline: "$2",
      },
      lg: {
        minSize: "$8",
        fontSize: "$md",
        paddingInline: "$3",
      },
    },
    rounded: {
      true: {
        borderRadius: "$full",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
