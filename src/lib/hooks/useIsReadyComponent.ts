"use client";
import { useEffect, useState } from "react";

/**
 * useIsReadyComponent
 * 
 * Detects hydration completion to prevent SSR/client mismatches.
 * 
 * Returns `true` on server/initial render, then `false` after hydration.
 * Use this to conditionally render content that differs between server and client.
 * 
 * @returns {object} { isReady:boolean }
 */
export function useIsReadyComponent() : { isReady: boolean } {
       const [isReady, setReady] = useState<boolean>(true);

       // Flip to false after component mounts (client-side)
       useEffect(() => setReady(false), []);

       return { isReady };
}