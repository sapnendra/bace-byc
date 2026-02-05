import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "beige" | "soft";
  id?: string;
}

export default function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    beige: "bg-beige",
    soft: "bg-beige-soft",
  };

  return (
    <section
      id={id}
      className={cn("section-padding", backgrounds[background], className)}
    >
      {children}
    </section>
  );
}
