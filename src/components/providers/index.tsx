"use client";
import { ReactNode } from "react";
import ReactQueryProviders from "./react-query-provider";
import { SessionProvider } from "next-auth/react";

export default function Providers({children}: {children:ReactNode}) {
       return (
              <ReactQueryProviders>
              <SessionProvider>
                     {children}
              </SessionProvider>
              </ReactQueryProviders>
       );
}
