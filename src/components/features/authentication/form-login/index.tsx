"use client";
import Link from "next/link";
import BoxMassageError from "@components/ui/box-massage-error";
import { cn } from "@lib/utils/cn.utils";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { handleNextAuthErrorMessage, onSubmitLogin } from "@lib/handlers/authentication";
import { InputPassword } from "@components/ui/input-password";
import { LoginSchema } from "@schema/authentication";
import type { FormInput } from "@lib/types/forms/form";
import ButtonLoading from "@components/ui/button-loading";
import { useIsReadyComponent } from "@lib/hooks/useIsReadyComponent";

export default function FormLogin() {
       const { isReady } = useIsReadyComponent();
       const messageError = handleNextAuthErrorMessage();
       const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInput<typeof LoginSchema>>({resolver: zodResolver(LoginSchema)});
       

       return (
       <form
              className={cn("w-1/2 p-32 flex flex-col items-start justify-center")}
              onSubmit={handleSubmit(onSubmitLogin)}
       >
              <h1
                     className={cn("mb-7 text-3xl text-gray-800 font-bold")}
              >
                     Login
              </h1>

              <div className={cn("email | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="email">Email</Label>
                     <Input className={cn("h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200", errors.email && "!border-red-600")} type="text" id="email" {...register("email")} disabled={isReady} placeholder="user@example.com" aria-label="input email" autoComplete="email" />
                     { errors.email && <p className="invalid | text-sm text-red-600">{ errors.email.message }</p>}
              </div>

              <div className={cn("password | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="password">password</Label>
                     <InputPassword className={cn("h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200", errors.password && "!border-red-600")} id="password" disabled={isReady} {...register("password")} placeholder="••••••••"   />
                     { errors.password && <p className="invalid | text-sm text-red-600">{ errors.password.message }</p>}
              </div>
              
              <Link className="mt-3 text-end text-blue-600 text-lg font-medium self-end" href="/auth/forgot-password">Forgot your password?</Link>
              { messageError && <BoxMassageError message={messageError} />}

              <button 
                     className="w-full mt-10 p-3 bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600" 
                     // onClick={handleClick}
                     disabled={isReady || isSubmitting}
              >
                     {isSubmitting ? <ButtonLoading /> : "Login"}
              </button>

              <p className="w-full mt-9 text-center text-lg text-gray-500">
                     Don’t have an account? <Link className="text-blue-600 text-lg" href="/auth/register">Create yours</Link>
              </p>
       </form>
       );
}
