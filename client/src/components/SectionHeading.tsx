import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <span className="block text-primary text-sm uppercase tracking-[0.2em] font-medium mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground font-light leading-tight">
        {title}
      </h2>
      <div 
        className={cn(
          "h-px w-20 bg-primary/30 mt-6",
          centered ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  );
}
