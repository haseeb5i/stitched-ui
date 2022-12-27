import {
  styled,
  keyframes,
  type CSS,
  type VariantProps,
} from "../theme/stitches.config";
import React from "react";

type SpinnerProps = React.HTMLAttributes<unknown> & {
  size?: VariantProps<typeof StyledSpinner>["size"];
  css?: CSS;
  loadingCss?: CSS;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
};

export const Spinner = (props: SpinnerProps) => {
  const { children, size, loadingCss, ...rest } = props;
  const ariaLabel = children ? "" : "Spinner";
  return (
    <StyledSpinnerContainer {...rest}>
      <>
        <StyledSpinner
          className="spinner"
          css={loadingCss}
          size={size}
          aria-label={ariaLabel}
        >
          <i className="_1" />
          <i className="_2" />
          <i className="_3" />
        </StyledSpinner>
        {children && (
          <StyledSpinnerLabel className="spinner-label">
            {children}
          </StyledSpinnerLabel>
        )}
      </>
    </StyledSpinnerContainer>
  );
};

const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const StyledSpinnerContainer = styled("div", {
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  $$loadingColor: "$colors$blue500",
  $$loadingTextColor: "$colors$bodyText",
});

const StyledSpinner = styled("span", {
  position: "relative",
  inset: "0px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  userSelect: "none",
  display: "flex",
  borderRadius: "$round",
  size: "$$loadingSize",
  i: {
    top: "0px",
    size: "100%",
    position: "absolute",
    borderRadius: "inherit",
  },
  "._1": {
    border: "$$loadingBorder solid $$loadingColor",
    borderTop: "$$loadingBorder solid transparent",
    borderLeft: "$$loadingBorder solid transparent",
    borderRight: "$$loadingBorder solid transparent",
    animation: `${rotate} 0.8s ease infinite`,
  },
  "._2": {
    border: "$$loadingBorder dotted $$loadingColor",
    borderTop: "$$loadingBorder solid transparent",
    borderLeft: "$$loadingBorder solid transparent",
    borderRight: "$$loadingBorder solid transparent",
    animation: `${rotate} 0.8s linear infinite`,
    opacity: 0.5,
  },
  "._3": {
    display: "none",
  },

  variants: {
    size: {
      xs: {
        $$loadingSize: "$space$3",
        $$loadingBorder: "$space$0-5",
      },
      sm: {
        $$loadingSize: "$space$4",
        $$loadingBorder: "$space$0-5",
      },
      md: {
        $$loadingSize: "$space$6",
        $$loadingBorder: "$space$0-5",
      },
      lg: {
        $$loadingSize: "$space$8",
        $$loadingBorder: "calc($space$0-5 * 1.5)",
      },
      xl: {
        $$loadingSize: "$space$12",
        $$loadingBorder: "$space$1",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const StyledSpinnerLabel = styled("label", {
  marginTop: "$1",
  color: "$$loadingTextColor",
  fontSize: "$space$12",
  "*": {
    margin: 0,
  },
});
