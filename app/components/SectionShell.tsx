import { PropsWithChildren } from "react";

type SectionShellProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  headerWidthClassName?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "",
  headerClassName = "",
  headerWidthClassName = "lg:w-3/5",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className={`fade-up space-y-3 ${headerWidthClassName} ${headerClassName}`}>
          {eyebrow && (
            <span className="small-caps inline-flex items-center gap-2 text-xs text-[#d4af37]">
              <span className="h-px w-8 bg-[#d4af37]/70" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h2 className="section-title text-3xl font-semibold text-[#f7f1e3] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && <p className="text-base leading-relaxed text-[#d8d0c0]">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
