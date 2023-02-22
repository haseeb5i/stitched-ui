import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { darkTheme } from "./theme/stitches.config";

export function ThemeToggle() {
  const [theme, setTheme] = useState("theme-default");

  useEffect(() => {
    document.documentElement.classList.remove("theme-default", darkTheme);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Button
      style={{ position: "fixed", zIndex: 999, right: 15, top: 15 }}
      onClick={() =>
        setTheme(theme === "theme-default" ? darkTheme : "theme-default")
      }
    >
      Toggle theme
    </Button>
  );
}
