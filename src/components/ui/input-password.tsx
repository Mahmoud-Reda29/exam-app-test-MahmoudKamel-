"use client";
import { cn } from "@lib/utils/cn.utils";
import { Input } from "./input";
import { useState, forwardRef } from "react";
import EyeOpenIcon from "@public/icons/eye-open";
import EyeOffIcon from "@public/icons/eye-off";

interface InputPasswordProps {
       id:string;
       className?:string;
       placeholder?:string;
       disabled?:boolean
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
       ({ id, className, placeholder, disabled,  ...props }, ref) => {
              const [isOpen, setOpen] = useState<boolean>(false);

              return (
                     <div className={cn("password-wrapper | relative")}>
                            <Input
                                   ref={ref}
                                   id={id}
                                   className={className}
                                   type={isOpen ? "text" : "password"}
                                   placeholder={placeholder}
                                   autoComplete="current-password"
                                   {...props}
                                   disabled={disabled}
                                   aria-label="input password" // for accessibility
                            />
                            <button
                                   type="button"
                                   disabled={disabled}
                                   className="absolute top-1/2 -translate-y-1/2 right-3"
                                   onClick={() => setOpen((prev) => !prev)}
                                   title={isOpen ? "Hide password" : "Show password"} // for accessibility
                            >
                                   {isOpen ? <EyeOpenIcon /> : <EyeOffIcon />}
                            </button>
                     </div>
              );
       }
);

InputPassword.displayName = "InputPassword";
