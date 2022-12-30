import * as React from "react";
import { CSS, styled, VariantProps } from "../theme/stitches.config";
import clsx from "clsx";

const InputGroup = styled("div", {
  $$inputBorderRadius: "$radii$md",
  $$inputBorderColor: "$colors$gray200",
  $$inputPaddingInline: "$space$4",
  $$focusBorderColor: "$colors$blue500",
  $$errorBorderColor: "$colors$red500",
  position: "relative",
  display: "flex",

  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        height: "$8",
        $$contentSize: "$space$8",
        $$inputBorderRadius: "$radii$sm",
        $$inputPaddingInline: "$space$3",
      },
      md: {
        fontSize: "$md",
        height: "$10",
        $$contentSize: "$space$10",
      },
      lg: {
        fontSize: "$lg",
        height: "$12",
        $$contentSize: "$space$12",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const StyledInput = styled("input", {
  position: "relative",
  appearance: "none",
  margin: "0",
  height: "100%",
  width: "100%",
  minWidth: 0,
  outline: "none", // mayabe make this global reset?
  paddingInline: "$$inputPaddingInline",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  border: "1px solid",
  borderColor: "transparent",
  borderRadius: "$$inputBorderRadius",
  transitionProperty: "background-color,border-color,color,box-shadow",
  transitionDuration: "200ms",

  "&::placeholder": {
    color: "rgba(0,0,0,0.36)",
  },

  "&:focus-visible": {
    border: "2px solid $$focusBorderColor !important",
  },

  "&:disabled, &[data-disabled]": {
    pointerEvents: "none",
    opacity: 0.4,
  },

  "&.has-label--left": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "&.has-label--right": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "&.has-content--left": {
    paddingInlineStart: "$$contentSize",
  },
  "&.has-content--right": {
    paddingInlineEnd: "$$contentSize",
  },

  variants: {
    variant: {
      outline: {
        borderColor: "$gray200",
        "&:hover": {
          borderColor: "$gray300",
        },
      },
      filled: {
        backgroundColor: "$gray100",
        "&:hover": {
          backgroundColor: "$gray200",
        },
        "&:focus-visible": {
          backgroundColor: "transparent",
        },
      },
    },
    invalid: {
      true: {
        borderWidth: "2px",
        borderColor: "$$errorBorderColor",
        "&:hover": {
          borderColor: "$$errorBorderColor",
        },
      },
    },
  },

  defaultVariants: {
    variant: "outline",
  },
});

const InputAddon = styled("span", {
  display: "flex",
  alignItems: "center",
  flex: "0 0 auto",
  backgroundColor: "$gray100",
  border: "1px solid",
  borderColor: "$gray200",
  borderRadius: "$$inputBorderRadius",
  paddingInline: "$$inputPaddingInline",

  "&.input-label--left": {
    marginInlineEnd: -1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderInlineEndColor: "transparent",
  },
  "&.input-label--right": {
    marginInlineStart: -1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderInlineStartColor: "transparent",
  },
});

const InputElement = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  zIndex: 2,

  "&.input-content--left": {
    left: 0,
    size: "$$contentSize",
  },
  "&.input-content--right": {
    right: 0,
    size: "$$contentSize",
  },
});

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "size"> &
  VariantProps<typeof StyledInput> & {
    size?: VariantProps<typeof InputGroup>["size"];
    labelLeft?: string | React.ReactNode;
    labelRight?: string | React.ReactNode;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    contentClickable?: boolean;
    css?: CSS;
  };

export const Input = React.forwardRef<React.ElementRef<"input">, InputProps>(
  (props, forwardedRef) => {
    const {
      css,
      size,
      labelLeft,
      labelRight,
      contentLeft,
      contentRight,
      ...rest
    } = props;

    const inputClassName = clsx({
      "has-content--right": !!contentRight,
      "has-content--left": !!contentLeft,
      "has-label--right": !!labelRight,
      "has-label--left": !!labelLeft,
    });

    return (
      <InputGroup css={css} size={size}>
        {labelLeft && (
          <InputAddon className="input-label--left">{labelLeft}</InputAddon>
        )}
        {contentLeft && (
          <InputElement className="input-content--left">
            {contentLeft}
          </InputElement>
        )}
        <StyledInput ref={forwardedRef} className={inputClassName} {...rest} />
        {contentRight && (
          <InputElement className="input-content--right">
            {contentRight}
          </InputElement>
        )}
        {labelRight && (
          <InputAddon className="input-label--right">{labelRight}</InputAddon>
        )}
      </InputGroup>
    );
  }
);

Input.displayName = "Input";
