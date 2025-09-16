import HeaderPage from "@components/features/dashboard/header-page";
import AsideLink from "@components/features/dashboard/asidebar/_components/aside-link";
import Asidebar from "@components/features/dashboard/asidebar/_components/asidebar";
import UserAccountIcon from "@public/icons/user-account";
import { cn } from "@lib/utils/cn.utils";
import LocIcon from "@public/icons/lock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Account Settings Page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ACTIVE_LINK = "bg-blue-100";

  return (
    <>
      <HeaderPage
        icon={<UserAccountIcon color="white" size="45" />}
        title="Account Settings"
        showButtonBack={true}
      />

      <main id="settings-page" className="mt-6 flex gap-6">
        <Asidebar className="bg-white min-w-72 p-6">
          <ul className={cn("links | flex-auto gap-2")} aria-label="list links">
            <AsideLink href="/account" active={ACTIVE_LINK}>
              <UserAccountIcon /> Profile
            </AsideLink>
            <AsideLink href="/account/change-password" active={ACTIVE_LINK}>
              <LocIcon /> Change Password
            </AsideLink>
          </ul>
        </Asidebar>
        {children}
      </main>
    </>
  );
}
