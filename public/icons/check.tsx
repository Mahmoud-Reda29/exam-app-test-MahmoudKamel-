import { Icons } from "@lib/types/icons/icons";
import { cn } from "@lib/utils/cn.utils";

export default function CheckIcon({ size = 18, className, color }: Readonly<Icons>) {
       return (
       <svg className={cn(className)} width={size} height={(size as number) + 1} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L6.75 13.25L3 9.5" stroke={color ?? "#00BC7D"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       );
}
