/* eslint-disable react/prop-types */
import * as React from "react";
import { styled, CSS } from "../theme/stitches.config";
import * as SliderPrimitive from "@radix-ui/react-slider";

export const SliderRoot = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "100%",

  '&[data-orientation="horizontal"]': {
    height: "$4",
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: "$4",
    height: 100,
  },
});

const SliderTrack = styled(SliderPrimitive.Track, {
  position: "relative",
  flexGrow: 1,
  backgroundColor: "$gray200",
  borderRadius: "$sm",
  '&[data-orientation="horizontal"]': { height: "$1-5" },
  '&[data-orientation="vertical"]': { width: "$1-5" },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  background: "$blue500",
  borderRadius: "inherit",
  height: "100%",
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  position: "relative",
  display: "block",
  outline: "none",
  size: "$4",
  backgroundColor: "white",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
  borderRadius: "$full",
});

type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & { css?: CSS };

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderRoot>,
  SliderProps
>((props, forwardedRef) => {
  const hasRange = ((props.defaultValue || props.value)?.length as number) > 1;

  return (
    <SliderRoot ref={forwardedRef} {...props}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
      {hasRange && <SliderThumb />}
    </SliderRoot>
  );
});

Slider.displayName = "Slider";
