"use client";
import Link from "next/link";
import UserAccountIcon from "@public/icons/user-account";
import LogoutIcon from "@public/icons/logout";
import { useRef, useState } from "react";
import { useHandleClickOutside } from "@lib/hooks/useHandleClickOutside";
import EllipsisVerticalIcon from "@public/icons/ellipsis-vertical";
import { cn } from "@lib/utils/cn.utils";
import { signOut } from "next-auth/react";

export default function ButtonDropdown() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const dropdownReference = useRef<HTMLUListElement>(null);

  // show or close dropdown when click outside the dropdown list
  useHandleClickOutside(dropdownReference, () => setOpen(false));

  return (
    <button onClick={() => setOpen(!isOpen)} aria-label="more options">
      <EllipsisVerticalIcon />
      <ul
        ref={dropdownReference}
        className={cn(
          "dropdown | absolute w-64 -top-32 left-0 bg-white border border-solid border-blue-50 transition-opacity duration-300 ease-out opacity-0",
          isOpen && "opacity-100"
        )}
        aria-label="dropdown list"
      >
        <li>
          <Link className="h-12 w-full p-4 flex items-center gap-2" href="/account">
            <UserAccountIcon size="18" />
            Account
          </Link>
        </li>
        <li>
          <button
            className="h-12 w-full p-4 flex items-center gap-2 text-red-600 border-t border-solid border-blue-50"
            onClick={() => signOut()}
          >
            <LogoutIcon />
            Logout
          </button>
        </li>
      </ul>
    </button>
  );
}
