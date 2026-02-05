import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
