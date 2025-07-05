"use client";

import { cn } from "@/lib/utils";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { useTheme } from "@/hooks/useTheme";

export function ThemeSwitch() {
  const { activeTheme, handleThemeChange } = useTheme();

  return (
    <div className="grid grid-cols-2 h-9 w-20 fixed bottom-6 right-6 z-[9999] items-center rounded-full overflow-hidden shadow-custom">
      {themeOptions?.map((theme) => {
        const isActive = activeTheme === theme.value;
        return (
          <button
            onClick={() => handleThemeChange(theme.value)}
            type="button"
            key={theme.value}
            disabled={isActive}
            className={cn(
              " flex items-center justify-center w-full h-full",
              isActive
                ? "bg-blue-primary text-white cursor-not-allowed"
                : "app-background text-neutral-950 dark:text-neutral-50"
            )}
          >
            {theme.icon}
          </button>
        );
      })}
    </div>
  );
}

const themeOptions = [
  {
    name: "Light Mode",
    value: "light",
    icon: <SunIcon />,
  },
  {
    name: "Dark Mode",
    value: "dark",
    icon: <MoonIcon />,
  },
];
