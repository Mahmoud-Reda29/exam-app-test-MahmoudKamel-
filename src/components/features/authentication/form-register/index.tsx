"use client";
import Link from "next/link";
import PhoneDropdown from "@components/ui/phone-dropdown";
import ButtonLoading from "@components/ui/button-loading";
import { cn } from "@lib/utils/cn.utils";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { InputPassword } from "@components/ui/input-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@lib/types/forms/form";
import { useForm } from "react-hook-form";
import { onSubmitRegister } from "@lib/handlers/authentication";
import { inter } from "@fonts";
import { useIsReadyComponent } from "@lib/hooks/useIsReadyComponent";
import { RegisterSchema } from "@schema/authentication";
import AlertMessage from "@components/ui/alert-message";
import { useState } from "react";


export default function FormRegister() {
       const { isReady } = useIsReadyComponent();
       const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormInput<typeof RegisterSchema>>({resolver: zodResolver(RegisterSchema)});
       // const [ isShowSuccessfulAlert, setShowSuccessfulAlert ] = useState<boolean>(false); 
       // const [ messageResponse, setMessageResponse ] = useState<string>(""); 

       return (
       <>
       {/* Displays a success alert based on state. */}
       {/* {(isShowSuccessfulAlert && messageResponse) && <AlertMessage status={isShowSuccessfulAlert} message={messageResponse} />} */}
       
       
       <form
              className={cn("w-1/2 p-32 flex flex-col items-start justify-center")}
              onSubmit={handleSubmit(onSubmitRegister)}
       >
              <h1
                     className={cn("mb-7 text-3xl text-gray-800 font-bold", inter.className)}
              >
                     Create Account
              </h1>

              <div className="w-full flex items-center justify-between gap-3">
              {/* firstName filed */}
              <div className={cn("firstName | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="firstName">First Name</Label>
                     <Input className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" type="text" id="firstName" disabled={isReady} {...register("firstName")} placeholder="Ahmed" autoComplete="name" />
                     { errors.firstName && <p className="invalid | text-sm text-red-600">{ errors.firstName.message }</p>}
              </div>

              {/* lastName filed */}
              <div className={cn("lastName | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="lastName">Last Name</Label>
                     <Input className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" type="text" id="lastName" disabled={isReady} {...register("lastName")} placeholder="Abdullah" autoComplete="family-name" />
                     { errors.lastName && <p className="invalid | text-sm text-red-600">{ errors.lastName.message }</p>}
              </div>
              </div>

              {/* username filed */}
              <div className={cn("username | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="username">Username</Label>
                     <Input className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" type="text" id="username" disabled={isReady} {...register("username")} placeholder="user123" autoComplete="username" />
                     { errors.username && <p className="invalid | text-sm text-red-600">{ errors.username.message }</p>}
              </div>

              {/* email filed */}
              <div className={cn("email | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="email">Email</Label>
                     <Input className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" type="text" id="email" disabled={isReady} {...register("email")} placeholder="user@example.com" autoComplete="email" />
                     { errors.email && <p className="invalid | text-sm text-red-600">{ errors.email.message }</p>}
              </div>

              {/* phone filed */}
              <div className={cn("phone | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="phone">Phone</Label>
                     <div className="flex flex-row-reverse items-center gap-2 border border-solid border-gray-200">
                            <Input className="h-12 border-none placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" type="tel" id="phone" disabled={isReady} {...register("phone")} placeholder="1012345678" autoComplete="mobile tel" />
                            <PhoneDropdown disabled={isReady} />
                     </div>                     
              { errors.phone && <p className="invalid | text-sm text-red-600">{ errors.phone.message }</p>}
              </div>

              <div className={cn("password | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="password">password</Label>
                     <InputPassword className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" id="password" disabled={isReady} {...register("password")} placeholder="••••••••" />
                     { errors.password && <p className="invalid | text-sm text-red-600">{ errors.password.message }</p>}
              </div>

              <div className={cn("confirm-password | w-full flex flex-col gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="confirm-password">Confirm Password</Label>
                     <InputPassword className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" id="confirm-password" disabled={isReady} {...register("rePassword")} placeholder="••••••••" />
                     { errors.rePassword && <p className="invalid | text-sm text-red-600">{ errors.rePassword.message }</p>}
              </div>

              <button 
                     className="w-full mt-10 p-3 bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600" 
                     // onClick={handleClick}
                     disabled={isReady || isSubmitting}
              >
                     {isSubmitting ? <ButtonLoading /> : "Create Account"}
              </button>

              <p className="w-full mt-9 text-center text-lg text-gray-500">
                     Already have an account? <Link className="text-blue-600 text-lg" href="/auth/login">Login</Link>
              </p>
       </form>
       </>
       );
}
