"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import styles from "./ModeToggle.module.css"; // We'll create this CSS module

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isRotating, setIsRotating] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setIsRotating(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setIsRotating(false);
    }, 200); // Half of the transition duration
  };

  return (
    <div className={styles.iconWrapper} onClick={toggleTheme}>
      {theme === "light" ? (
        <SunIcon
          className={`${styles.icon} ${isRotating ? styles.rotatesun : ""}`}
        />
      ) : (
        <MoonIcon
          className={`${styles.icon} ${isRotating ? styles.rotate : ""}`}
        />
      )}
    </div>
  );
}
