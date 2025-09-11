import { Icons } from "@lib/types/icons/icons";

export default function MoveLeftIcon({size = 24, className} : Readonly<Icons>) {
       return (
       <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 8L2 12M2 12L6 16M2 12H22" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       );
}
