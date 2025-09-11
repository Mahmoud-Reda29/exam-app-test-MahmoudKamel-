import type { HeaderPage } from "@lib/types/components";
import { cn } from "@lib/utils/cn.utils";
import ButtonBack from "./_components/button-back";

export default function HeaderPage({title, icon, showButtonBack}:HeaderPage) {
       return (
       <header className={cn("flex gap-2")}>
              { showButtonBack && <ButtonBack />}

              <h2 className={cn("h-20 p-4 flex flex-auto items-center gap-4 text-3xl font-semibold text-white bg-blue-600")}>
                     {icon} {title}
              </h2>
       </header>
       );
}