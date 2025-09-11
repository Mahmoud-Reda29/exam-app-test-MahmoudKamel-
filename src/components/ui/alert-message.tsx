"use client";
import { Alert, AlertTitle } from "@components/ui/alert";
import { cn } from "@lib/utils/cn.utils";
import { LegacyRef, useEffect, useState } from "react";
import CheckIcon from "@public/icons/check";

export default function AlertMessage({status, message } : {status:boolean, message:string}) {
       const [ isShow, setShow ] = useState<boolean>(status);

       useEffect(()=> {
              if (isShow) {
                     // setup time out for show alert since 2s
                     const time = setTimeout(() => setShow(false), 2000);
        
                     // Cleanup function
                     return ()=> clearTimeout(time);
              }
       }, [isShow]);

       return (
       <Alert className={cn("h-12 w-96 flex items-center fixed bottom-6 -right-96 rounded-none bg-gray-800 text-white shadow-xl transition-right duration-200", isShow && "right-6")}>
              <AlertTitle className={cn("m-0 flex items-center gap-3")}><CheckIcon /> {message}</AlertTitle>
       </Alert>
       );
}
