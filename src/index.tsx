import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { globalStyles } from "./theme";

const UIProvider = ({ children }: React.PropsWithChildren) => {
  globalStyles();
  return <TooltipProvider>{children}</TooltipProvider>;
};
const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </React.StrictMode>
);
