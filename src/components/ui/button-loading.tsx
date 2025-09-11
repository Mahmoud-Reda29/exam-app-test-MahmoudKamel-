import "@/style/button-loading.css";
import { cn } from "@lib/utils/cn.utils";

export default function ButtonLoading() {
       return (
              <div className={cn("loader")}>
                     <div className={cn("bar1")} />
                     <div className={cn("bar2")} />
                     <div className={cn("bar3")} />
                     <div className={cn("bar4")} />
                     <div className={cn("bar5")} />
                     <div className={cn("bar6")} />
                     <div className={cn("bar7")} />
                     <div className={cn("bar8")} />
                     <div className={cn("bar9")} />
                     <div className={cn("bar10")} />
                     <div className={cn("bar11")} />
                     <div className={cn("bar12")} />
              </div>

       );
}
