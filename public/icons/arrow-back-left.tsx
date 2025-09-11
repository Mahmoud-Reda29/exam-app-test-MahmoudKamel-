import { Icons } from "@lib/types/icons/icons";
import { cn } from "@lib/utils/cn.utils";

export default function ArrowBackLeftIcon({size = 24, className, color} : Readonly<Icons>) {
       return (
       <svg className={cn(className)} width={size} height={(size as number) + 1} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 18.5L9 12.5L15 6.5" stroke={color ?? "#155DFC"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       );
}
