"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect to handle mounting state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder/skeleton
  }

  return (
    <div>
      {theme === "dark" ? (
        <MoonIcon
          className="h-[1.2rem] w-[1.2rem] cursor-pointer  hover:text-yellow-200 transition-all  duration-300 ease-in-out"
          onClick={() => setTheme("light")}
        />
      ) : (
        <SunIcon
          className="h-[1.2rem] w-[1.2rem] cursor-pointer  transition-all hover:text-gray-400  duration-300 ease-in-out"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
