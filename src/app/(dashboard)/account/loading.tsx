import "@/style/loading.css";
import { cn } from "@lib/utils/cn.utils";

export default function Loading() {
  return (
    <section className={cn("flex-auto w-auto min-h-auto flex items-center justify-center")}>
      <div className={cn("banter-loader")}>
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
        <div className={cn("banter-loader__box")} />
      </div>
    </section>
  );
}
