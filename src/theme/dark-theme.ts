// import { blue, gray, teal } from "./colors";

const darkTheme = {
  colors: {
    //semantic colors
    accent: "$teal300",
    accentEmphasis: "$teal200",
    accentMuted: "$teal200",
    accentSubtle: "$teal800",
    fg: "$gray100",
    fgEmphasis: "$gray200",
    fgMuted: "$gray400",
    fgSubtle: "$gray300",
    fgOnAccent: "inherit",
    
    // misc colors
    bodyBg: "$gray800",
    bodyText: "$whiteAlpha900",
    borderColor: "$whiteAlpha300",
    subtleBg: "$gray700",
    placeholderColor: "$whiteAlpha400",
  },
  shadows: {
    xs: "-4px 0 15px rgb(0 0 0 / 50%)",
    sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
    md: "0 8px 30px rgba(20, 20, 20, 0.15)",
    lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
    xl: "0 40px 80px rgba(20, 20, 20, 0.25)",
  },
};

export default darkTheme;
