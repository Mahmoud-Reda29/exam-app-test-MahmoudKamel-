import Link from "next/link";
import Image from "next/image";
import FolderCodeIcon from "@public/icons/folder-code";
import ButtonDropdown from "./_components/button-dropdown";
import { cn } from "@lib/utils/cn.utils";
import Asidebar from "./_components/asidebar";
import AsideLink from "./_components/aside-link";
import GraduationCapIcon from "@public/icons/graduation-cap";
import UserAccountIcon from "@public/icons/user-account";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configuration/auth";

export default async function AsidebarRoot() {
  const session = await getServerSession(authOptions);

  return (
    <Asidebar className="max-w-asidebar-width">
      {/* header asidebar part */}
      <Link className={cn("logo")} href="/">
        <Image src="/images/E-Logo.svg" alt="logo elevate" width="192" height="37" loading="lazy" />
        <p className={cn("mt-2 flex items-center gap-2 text-xl font-semibold text-blue-600")}>
          <FolderCodeIcon /> Exam App
        </p>
      </Link>

      {/* body-links asidebar part */}
      <ul className={cn("links | flex-auto gap-2")} aria-label="list links">
        <AsideLink href="/">
          <GraduationCapIcon /> Diplomas
        </AsideLink>
        <AsideLink href="/account">
          <UserAccountIcon /> Account Settings
        </AsideLink>
      </ul>

      {/* footer asidebar part */}
      <div className={cn("user | relative flex items-center gap-2")} aria-label="user">
        <Image
          src={session?.user?.image ?? "/images/avatar.webp"}
          alt="photo user"
          width="54"
          height="54"
          loading="lazy"
        />
        <div className="info">
          <span className={cn("text-blue-600 font-semibold")} aria-label="first name">
            {session?.user?.name}
          </span>
          <p
            className={cn("max-w-44 text-sm overflow-hidden text-ellipsis")}
            aria-label="email user"
          >
            {session?.user?.email}
          </p>
        </div>
        <ButtonDropdown />
      </div>
    </Asidebar>
  );
}
