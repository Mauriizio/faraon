import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const baseStyles =
  "btn-shine inline-flex items-center justify-center rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#0a0a0a] shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]";

const subtleStyles =
  "btn-shine inline-flex items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#0f0f0f] px-5 py-3 text-sm font-semibold text-[#f7f1e3] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:bg-[#1b1b1b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]";

type CTAButtonProps = PropsWithChildren<
  {
    href?: string;
    variant?: "solid" | "ghost";
    className?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export function CTAButton({
  href,
  variant = "solid",
  children,
  className = "",
  type,
  ...buttonProps
}: CTAButtonProps) {
  const styles = `${variant === "solid" ? baseStyles : subtleStyles} ${className}`;

  // Caso LINK (no pasamos props de botón al Link)
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  // Caso BOTÓN
  return (
    <button
      type={type ?? "button"}
      className={styles}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
