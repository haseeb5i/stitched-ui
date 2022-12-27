import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { globalStyles } from "./theme";

const UIProvider = ({ children }: React.PropsWithChildren) => {
  globalStyles();
  return <TooltipProvider>{children}</TooltipProvider>;
};

ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
