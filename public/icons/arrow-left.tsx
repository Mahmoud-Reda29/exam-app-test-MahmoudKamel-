import { Icons } from "@lib/types/icons/icons";

export default function ArrowLeftIcon({size = 40, className} : Readonly<Icons>) {
       return (
       <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0.75" y="0.75" width="38.5" height="38.5" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M14 16L10 20M10 20L14 24M10 20H30" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       );
}
