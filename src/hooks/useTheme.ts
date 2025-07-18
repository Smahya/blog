"use client";

import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import { useDocument } from "@/hooks/useDocument";

export const useTheme = () => {
  const { _document } = useDocument();

  const [activeTheme, setActiveTheme] = useState<string>("dark"); // Default theme for SSR
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback(
    (theme: string) => {
      if (theme === "dark") {
        _document?.documentElement.classList.add("dark");
        _document?.documentElement.classList.remove("light");
      } else if (theme === "light") {
        _document?.documentElement.classList.add("light");
        _document?.documentElement.classList.remove("dark");
      }
    },
    [_document]
  );

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    Cookies.set("theme", newTheme);

    if (newTheme === "system") {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const applySystemTheme = useCallback(() => {
    if (typeof window === "undefined") return;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (systemPrefersDark) {
      _document?.documentElement.classList.add("dark");
      _document?.documentElement.classList.remove("light");
    } else {
      _document?.documentElement.classList.add("light");
      _document?.documentElement.classList.remove("dark");
    }
  }, [_document]);

  useEffect(() => {
    setMounted(true);

    const savedTheme = Cookies.get("theme");
    if (savedTheme === "system" || !savedTheme) {
      applySystemTheme();
      setActiveTheme("system");
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === "system") {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [applySystemTheme, applyTheme]);

  return {
    activeTheme: mounted ? activeTheme : "light", // Return default theme until mounted
    handleThemeChange,
  };
};
