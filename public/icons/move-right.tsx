import { Icons } from "@lib/types/icons/icons";

export default function MoveRightIcon({size = 18, className} : Readonly<Icons>) {
       return (
       <svg className={className} width={size} height={(size as number) + 1} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M13.5 6.5L16.5 9.5M16.5 9.5L13.5 12.5M16.5 9.5H1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
       </svg>
       );
}
