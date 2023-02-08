import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')",
  ],
  html: {
    boxSizing: "border-box",
  },
  "*, *::after, *::before": {
    borderWidth: 0,
    borderStyle: "solid",
    boxSizing: "inherit",
  },
  body: {
    backgroundColor: "$bodyBg",
    color: "$fg",
    fontFamily: "$body",
    lineHeight: "$base",
    fontFeatureSettings: "kern",
    transitionProperty: "backgroundColor",
    transitionDuration: "$normal",
  },
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit",
  },
  "b, strong": {
    fontWeight: "bold",
  },
  small: {
    fontSize: "80%",
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: {
    bottom: "-0.25em",
  },
  sup: {
    top: "-0.5em",
  },
  "img, video": {
    maxWidth: "100%",
    height: "auto",
  },
  img: {
    borderStyle: "none",
  },
  "body, h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  "ol, ul": {
    margin: 0,
    padding: 0,
  },
  "button, input, optgroup, select, textarea": {
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "inherit",
    padding: 0,
    outline: "none",
  },

  'button, [role="button"]': {
    cursor: "pointer",
  },
  table: {
    borderCollapse: "collapse",
  },
});
