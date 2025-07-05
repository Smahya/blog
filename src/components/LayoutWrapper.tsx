"use client";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  useTheme();
  return <React.Fragment>{children}</React.Fragment>;
};
