"use client";
import { formatPathName } from "@lib/utils/formats";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const breadcrumbs = formatPathName(path);

  return (
    <nav>
      {breadcrumbs.map((item) => {
        // if (item.href !== path) return;
        return (
          <Link
            key={item}
            href={item === "home" ? "/" : `/${item}`}
            className="hover:underline capitalize"
          >
            {item === "/" ? "home" : item}
          </Link>
        );
      })}
    </nav>
  );
}
