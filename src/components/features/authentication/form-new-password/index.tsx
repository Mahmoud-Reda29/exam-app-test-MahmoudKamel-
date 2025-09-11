"use client";
import Link from "next/link";
import BoxMassageError from "@components/ui/box-massage-error";
import { cn } from "@lib/utils/cn.utils";
import { Label } from "@components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { handleNextAuthErrorMessage, onNewPassword } from "@lib/handlers/authentication";
import { InputPassword } from "@components/ui/input-password";
import { NewPasswordSchema } from "@schema/authentication";
import type { FormInput } from "@lib/types/forms/form";
import ButtonLoading from "@components/ui/button-loading";
import { ForgotPasswordAuthProps } from "@lib/types/components/authentication";

export default function FormNewPassword({onBack, getEmail} : ForgotPasswordAuthProps & {getEmail:string}) {
       // State to control when the form's submit button should be disabled.
       // It prevents submitting until the React Hook Form script is fully loaded/ready.
       const [ isReady, setReady ] = useState<boolean>(true); 
       const messageError = handleNextAuthErrorMessage();
       const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInput<typeof NewPasswordSchema>>({resolver: zodResolver(NewPasswordSchema),defaultValues: {email: getEmail}});
       

       useEffect(()=> {
              setReady(false);
       }, []);

       return (
       <form
              className={cn("w-full p-32 flex flex-col items-start justify-center")}
              onSubmit={handleSubmit(onNewPassword)}
       >
              <h1
                     className={cn("text-3xl text-gray-800 font-bold")}
              >
                     Create a New Password
              </h1>
              <p className={cn("mb-7 ")}>Create a new strong password for your account.</p>

              <div className={cn("new-password | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="new-password">New Password</Label>
                     <InputPassword className={cn("h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200", errors.newPassword && "!border-red-600")} id="new-password" {...register("newPassword")} placeholder="••••••••" />
                     { errors.newPassword && <p className="invalid | text-sm text-red-600">{ errors.newPassword.message }</p>}
              </div>

              <div className={cn("confirm-new-password | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                     <InputPassword className={cn("h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200", errors.confirmPassword && "!border-red-600")} id="confirm-new-password" {...register("confirmPassword")} placeholder="••••••••" />
                     { errors.confirmPassword && <p className="invalid | text-sm text-red-600">{ errors.confirmPassword.message }</p>}
              </div>
              
              <Link className="mt-3 text-end text-blue-600 text-lg font-medium self-end" href="/auth/forgot-password">Forgot your password?</Link>
              { messageError && <BoxMassageError message={messageError} />}

              <button 
                     className="w-full mt-10 p-3 bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600" 
                     // onClick={handleClick}
                     disabled={isReady || isSubmitting}
              >
                     {isSubmitting ? <ButtonLoading /> : "Create Account"}
              </button>

              <p className="w-full mt-9 text-center text-lg text-gray-500">
                     Don’t have an account? <Link className="text-blue-600 text-lg" href="/auth/register">Create yours</Link>
              </p>
       </form>
       );
}
