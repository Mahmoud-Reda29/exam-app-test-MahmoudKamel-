"use client";
import Link from "next/link";
import { cn } from "@lib/utils/cn.utils";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormInput } from "@lib/types/forms/form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { handleNextAuthErrorMessage, onForgotPassword } from "@lib/handlers/authentication";
import { ForgotPasswordSchema } from "@schema/authentication/forgot-password/forgot-password";
import ButtonLoading from "@components/ui/button-loading";
import MoveRightIcon from "@public/icons/move-right";
import BoxMassageError from "@components/ui/box-massage-error";
import { ForgotPasswordAuthProps } from "@lib/types/components/authentication";
import AlertMessage from "@components/ui/alert-message";
import { ForgetPasswordResponse } from "@lib/types/api/authentication";

export default function FormForgotPassword({
  onSuccess,
  setEmail,
}: ForgotPasswordAuthProps & { setEmail: (email: string) => void }) {
  // State to control when the form's submit button should be disabled.
  // It prevents submitting until the React Hook Form script is fully loaded/ready.
  const [isReady, setReady] = useState<boolean>(true);
  const [isShowSuccessfulAlert, setShowSuccessfulAlert] = useState<boolean>(false);
  const [messageResponse, setMessageResponse] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const messageError = handleNextAuthErrorMessage();

  useEffect(() => {
    setReady(false);
    if (isShowSuccessfulAlert && onSuccess) {
      const time = setTimeout(onSuccess, 3000);
      return () => clearTimeout(time);
    }
  }, [isShowSuccessfulAlert, onSuccess]);

  return (
    <>
      {/* Displays a success alert based on state. */}
      {isShowSuccessfulAlert && messageResponse && (
        <AlertMessage status={isShowSuccessfulAlert} message={messageResponse} />
      )}

      {/* Form login application */}
      <form
        className={cn("h-full w-auto p-32 flex flex-col flex-shrink-0 items-start justify-center")}
        onSubmit={handleSubmit(async (data) => {
          const isSuccess = await onForgotPassword(data);
          if (isSuccess && onSuccess) {
            setEmail(data.email);
            setShowSuccessfulAlert(true);
            setMessageResponse((isSuccess as ForgetPasswordResponse).info);
          }
        })}
      >
        {/* Title for the form */}
        <h1 className={cn("text-3xl text-gray-800 font-bold")}>Forgot Password</h1>

        {/* Form description */}
        <p className="mb-7">
          Don’t worry, we will help you recover your <br /> account.
        </p>

        {/* Form input for the user's email  */}
        <div className={cn("email | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
          <Label htmlFor="email">Email</Label>
          <Input
            className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
            type="text"
            id="email"
            {...register("email")}
            placeholder="user@example.com"
          />
          {errors.email && <p className="invalid | text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Displays an error message box if an error exists. */}
        {messageError && <BoxMassageError message={messageError} />}

        {/* Submit button for the form. */}
        <button
          className={cn(
            "w-full mt-10 p-3 flex items-center gap-2 justify-center bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          )}
          disabled={isReady || isSubmitting}
        >
          {isSubmitting ? (
            <ButtonLoading />
          ) : (
            <>
              Continue <MoveRightIcon />
            </>
          )}
        </button>

        {/* Link to the registration page. */}
        <p className={cn("w-full mt-9 text-center text-lg text-gray-500")}>
          Don’t have an account?{" "}
          <Link className="text-blue-600 text-lg" href="/auth/register">
            Create yours
          </Link>
        </p>
      </form>
    </>
  );
}
