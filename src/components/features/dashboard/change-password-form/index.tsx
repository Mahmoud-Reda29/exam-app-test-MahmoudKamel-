"use client";
import ButtonLoading from "@components/ui/button-loading";
import { InputPassword } from "@components/ui/input-password";
import { Label } from "@components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@lib/types/forms/form";
import { cn } from "@lib/utils/cn.utils";
import { ChangePasswordFormSchema } from "@schema/dashboard/form-account/change-password-form";
import { useForm } from "react-hook-form";

export default function ChangePasswordForm() {
       const { register, formState: {errors, isSubmitting} } = useForm<FormInput<typeof ChangePasswordFormSchema>>({resolver: zodResolver(ChangePasswordFormSchema)});

       return (
       <form
              className={cn("h-full w-full p-6 flex flex-col items-start justify-center")}
              // onSubmit={handleSubmit(onSubmitRegister)}
       >
              {/* current-password filed */}
              <div className={cn("current-password | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="current-password">Current Password</Label>
                     <InputPassword className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" id="current-password" {...register("currentPassword")} placeholder="••••••••" />
                     {errors.currentPassword && <p className="invalid | text-sm text-red-600">{errors.currentPassword.message}</p>}
              </div>

              {/* new-password filed */}
              <div className={cn("new-password | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="new-password">New Password</Label>
                     <InputPassword className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" id="new-password" {...register("newPassword")} placeholder="••••••••" />
                     {errors.newPassword && <p className="invalid | text-sm text-red-600">{errors.newPassword.message}</p>}
              </div>

              {/* confirm-new-password filed */}
              <div className={cn("confirm-new-password | w-full mb-8 flex flex-col flex-auto gap-2 text-gray-800 font-medium")}>
                     <Label htmlFor="confirm-new-password">New Password</Label>
                     <InputPassword className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200" id="confirm-new-password" {...register("confirmNewPassword")} placeholder="••••••••" />
                     {errors.confirmNewPassword && <p className="invalid | text-sm text-red-600">{errors.confirmNewPassword.message}</p>}
              </div>

              {/* button submit */}
              <button
                     className="w-full p-3 flex-auto bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                     // onClick={handleClick}
                     // disabled={isReady || isSubmitting}
              >
                     {isSubmitting ? <ButtonLoading /> : "Update Password"}
              </button>
       </form>
       );
}
