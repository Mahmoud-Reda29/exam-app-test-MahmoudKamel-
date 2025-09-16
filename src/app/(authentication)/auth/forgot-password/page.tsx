import { Metadata } from "next";
import { cn } from "@lib/utils/cn.utils";
import MultiPagesAuth from "@components/features/authentication/multi-pages-auth";

export const metadata: Metadata = {
  title: "forgot password",
  description: "forgot password account exam app",
};

export default function ForgotPassword() {
  return (
    <section className={cn("h-auto w-1/2 flex flex-auto overflow-hidden")}>
      <MultiPagesAuth />
    </section>
  );
}
