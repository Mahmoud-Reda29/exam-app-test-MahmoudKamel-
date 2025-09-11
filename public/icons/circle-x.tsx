import { Icons } from "@lib/types/icons/icons";

export default function CircleXIcon({size = 18, className} : Readonly<Icons>) {
       return (
       <svg className={className} width={size} height={(size as number) + 1} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" fill="white" />
              <path d="M11.25 7.25L6.75 11.75L11.25 7.25Z" fill="white" />
              <path d="M6.75 7.25L11.25 11.75L6.75 7.25Z" fill="white" />
              <path d="M11.25 7.25L6.75 11.75M6.75 7.25L11.25 11.75M16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 5.35786 4.85786 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5Z" stroke="#DC2626" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
       </svg>

       );
}
