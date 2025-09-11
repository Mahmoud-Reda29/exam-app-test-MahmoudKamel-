"use client";
import { cn } from "@lib/utils/cn.utils";
import ArrowBackLeftIcon from "@public/icons/arrow-back-left";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
       const router = useRouter();

       return (
              <button
                     className={cn("h-auto px-1 border border-solid border-blue-600")}
                     role="link"
                     onClick={() => router.back()}
              >
                     <ArrowBackLeftIcon />
              </button>
       );
}
