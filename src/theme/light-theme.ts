import { gray, teal, blue, green, red, blackAlpha, whiteAlpha } from "./colors";

const lightTheme = {
  colors: {
    //semantic colors
    ...gray,
    ...teal,
    ...blue,
    ...green,
    ...red,
    ...blackAlpha,
    ...whiteAlpha,

    // use case aliases
    accent: "$teal500",
    accentEmphasis: "$teal700",
    accentStatic: "$teal500",
    accentMuted: "$teal300",
    accentSubtle: "$teal50",
    fg: "$gray700",
    fgEmphasis: "$gray900",
    fgMuted: "$gray600",
    fgSubtle: "$gray500",
    fgOnAccent: "$white",
    
    // misc colors
    bodyBg: "$white",
    bodyText: "$gray800",
    borderColor: "$gray200",
    subtleBg: "$gray100",
    placeholderColor: "$gray500",
    link: "$blue600",
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  },
};

export default lightTheme;
