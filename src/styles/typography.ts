export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body1"
  | "body2"
  | "body3"
  | "small";
type className = React.HTMLAttributes<HTMLElement>["className"];

export const typography: Record<TypographyVariant, className> = {
  h1: "font-bold text-neutral-950 dark:text-neutral-50 text-5xl leading-[120%] tracking-[-0.5px]", // Text Preset 1
  h2: "font-bold text-neutral-950 dark:text-neutral-50 text-3xl leading-[120%] tracking-[-0.5px]", // Text Preset 2
  h3: "font-semibold text-neutral-950 dark:text-neutral-50 text-2xl leading-[120%] tracking-[-0.3px]", // Text Preset 3
  body1:
    "font-medium text-neutral-950 dark:text-neutral-50 text-xl leading-[120%] tracking-[-0.2px]", // Text Preset 4
  body2:
    "font-medium text-lg leading-[120%] tracking-[-0.2px] text-neutral-950 dark:text-neutral-50", // Text Preset 5
  body3:
    "font-normal text-base leading-[120%] tracking-[-0.2px] text-neutral-950 dark:text-neutral-50", // Text Preset 6
  small:
    "font-normal text-sm leading-[120%] tracking-[-0.2px] text-neutral-950 dark:text-neutral-50", // Text Preset 6
} as const;
