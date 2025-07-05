import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Refresh from "@/assets/icons/refresh.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "border" | "link";
  children: ReactNode;
  icon?: ReactNode;
  block?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  variant = "primary",
  children,
  className,
  icon,
  disabled,
  block,
  loading,
  type = "button",
  size = "md",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-sm font-inter font-medium transition-all duration-200 flex items-center gap-2 h-max w-max";

  const variants = {
    primary: cn(
      "bg-blue-primary text-white",
      "hover:bg-blue-700 hover:ring-2 hover:ring-blue-200 hover:ring-offset-2",
      "active:bg-blue-800",
      "disabled:opacity-50 disabled:hover:ring-0 disabled:hover:ring-offset-0"
    ),
    secondary: cn(
      "bg-neutral-100 text-neutral-900",
      "hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2",
      "active:bg-neutral-300",
      "disabled:opacity-50 disabled:hover:ring-0 disabled:hover:ring-offset-0"
    ),
    border: cn(
      "bg-white text-neutral-900 border-2 border-neutral-200",
      "hover:bg-neutral-50 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2",
      "active:bg-neutral-100",
      "disabled:opacity-50 disabled:border-neutral-100 disabled:hover:ring-0 disabled:hover:ring-offset-0"
    ),
    link: cn(
      "bg-transparent text-blue-primary p-0 text-underline",
      "hover:bg-transparent hover:ring-0 hover:ring-offset-0",
      "active:bg-transparent"
    ),
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className, {
        "w-full flex justify-center items-center": block,
        "disabled:cursor-not-allowed": disabled,
      })}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {loading && <Refresh className="animate-spin" />}
      {children}
    </button>
  );
};
