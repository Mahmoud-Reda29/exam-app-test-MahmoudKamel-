"use client";
import { RefObject, useEffect } from "react";

/**
 * Custom hook to detect clicks outside a specific HTML element and trigger a callback.
 * Useful for closing dropdowns, modals, or tooltips when the user clicks outside the target element.
 *
 * `@param ref` - A React ref pointing to the target HTML element to monitor.   
 * `@param callback` - A function to be called when a click occurs outside the referenced element.
 *
 * @example
 * const dropdownRef = useRef(null);
 * useHandleClickOutside(dropdownRef, () => {
 *   setDropdownOpen(false);
 * });
 */
export function useHandleClickOutside(ref:RefObject<HTMLUListElement | HTMLElement>, callback: () => void) {
       useEffect(()=> {
              const handleClickOutside = (e: MouseEvent)=> {
                     if (ref.current && !ref.current.contains(e.target as Node)) {
                            callback();
                     }
              };
              document.addEventListener("click", handleClickOutside);
              return () => {
                     document.removeEventListener("click", handleClickOutside);
              };
       }, [ref, callback]);
}