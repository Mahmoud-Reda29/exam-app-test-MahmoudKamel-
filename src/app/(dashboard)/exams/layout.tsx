import { cn } from "@lib/utils/cn.utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "exams",
  description: "Account Settings Page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main id="settings-page" className={cn("")}>
        {children}
      </main>
    </>
  );
}
