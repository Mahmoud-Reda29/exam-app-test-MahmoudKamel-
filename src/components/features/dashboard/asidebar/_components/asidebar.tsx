import { cn } from "@lib/utils/cn.utils";
import { ReactNode } from "react";

export default function Asidebar({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <aside
      className={cn("h-screen min-w-fit p-10 flex flex-col gap-10 bg-blue-50", className)}
      aria-label="control center"
    >
      {children}
    </aside>
  );
}
