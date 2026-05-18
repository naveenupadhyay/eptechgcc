import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "icon";
  ariaLabel?: string;
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  ariaLabel,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/60 focus:ring-offset-2 focus:ring-offset-ink disabled:pointer-events-none disabled:opacity-50",
    size === "icon" ? "size-9 p-0" : "min-h-11 px-4 py-2 text-sm md:px-5",
    variant === "primary" &&
      "border-cyan/60 bg-cyan text-ink shadow-glow hover:border-white hover:bg-white",
    variant === "secondary" &&
      "border-white/18 bg-white/[0.055] text-white hover:border-cyan/50 hover:bg-cyan/10",
    variant === "ghost" && "border-transparent bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",
    className
  );

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
        {size !== "icon" && <ArrowRight className="size-4" />}
      </a>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel} {...props}>
      {children}
      {size !== "icon" && variant !== "ghost" && <ArrowRight className="size-4" />}
    </button>
  );
}
