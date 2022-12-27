import { styled } from "../theme/stitches.config";

export const Alert = styled("div", {
  border: "1px solid",
  borderRadius: "$2",

  variants: {
    size: {
      "1": {
        p: "$3",
      },
    },
    variant: {
      primary: {
        backgroundColor: "$blue2",
        borderColor: "$blue6",
      },
      success: {
        backgroundColor: "$green2",
        borderColor: "$green6",
      },
      error: {
        backgroundColor: "$red2",
        borderColor: "$red6",
      },
      gray: {
        backgroundColor: "$slate2",
        borderColor: "$slate6",
      },
    },
  },
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
