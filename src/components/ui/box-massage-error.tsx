"use client";
import { cn } from "@lib/utils/cn.utils";
import CircleXIcon from "@public/icons/circle-x";
import { useState } from "react";

export default function BoxMassageError({message}: {message?:string}) {
       const [ isShow, setShow ] = useState<boolean>(true);
       return (
              <p
                     className={cn("h-10 w-full mt-12 relative flex items-center justify-center text-center bg-red-50 border border-solid border-red-600 text-red-600 text-sm", !isShow && "hidden")}
                     aria-label="Error Message"
              >
                     { message ?? "Something went wrong"}
                     <button 
                            className={cn("absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2")}
                            onClick={() => setShow(false)}
                            title="Close" // for accessibility
                            type="button"
                     >
                            <CircleXIcon />
                     </button>
              </p>
       );
}
