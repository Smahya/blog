import { cn } from "@/lib/utils";

export function PostsContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mt-12 mb-20 grid lg:grid-cols-[2fr_1fr] gap-10 container",
        className
      )}
    >
      {children}
    </section>
  );
}
