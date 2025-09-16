import PanelCover from "@components/features/authentication/panel-cover";
import { ReactNode } from "react";
import { cn } from "@lib/utils/cn.utils";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className={cn("flex content-stretch min-h-screen")}>
      <PanelCover />
      {children}
    </section>
  );
}
