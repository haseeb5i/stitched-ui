// import { blue, gray, teal } from "./colors";

const darkTheme = {
  colors: {
    //semantic colors
    // misc
    // accent: var(--chakra-colors-teal-300);
    // accent-emphasis: var(--chakra-colors-teal-200);
    // accent-muted: var(--chakra-colors-teal-200);
    // accent-subtle: var(--chakra-colors-teal-800);
    accentSubtle: "$teal50",
    accentMuted: "$teal300",
    accentStatic: "$teal500",
    accent: "$teal500",
    accentEmphasis: "$teal700",
    // TODO: prefix with some namespace
    bodyBg: "$gray800",
    bodyText: "rgba(255, 255, 255, 0.92)",
    borderColor: "rgba(255, 255, 255, 0.16)",
    subtleBg: "$gray700",
    placeholderColor: "rgba(255, 255, 255, 0.24)",
    fg: "$gray100",
    fgEmphasis: "$gray200",
    fgMuted: "$gray400",
    fgSubtle: "$gray300",
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
