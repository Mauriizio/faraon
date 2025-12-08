import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const baseStyles =
  "btn-shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e5c45c] via-[#d4af37] to-[#c99b27] px-5 py-3 text-sm font-semibold text-[#0b0b0b] shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:px-6";

const subtleStyles =
  "btn-shine inline-flex items-center justify-center rounded-full border border-[#d4af37]/70 bg-[#0f0f0f] px-5 py-3 text-sm font-semibold text-[#fbe7a1] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 hover:border-[#f0d26a] hover:bg-[#161616] hover:text-[#fff7d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:px-6";

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
