import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-semibold text-blue uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
