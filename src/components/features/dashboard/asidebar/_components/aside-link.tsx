"use client";
import { cn } from "@lib/utils/cn.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AsideLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode | string;
  active?: string;
}) {
  const PATH = usePathname(),
    ACTIVE_LINK = active ?? "bg-blue-100 border border-solid border-blue-600";

  return (
    <li>
      <Link
        className={cn(
          "mb-10px p-4 flex items-center gap-3 text-gray-500",
          PATH === href && ACTIVE_LINK
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
