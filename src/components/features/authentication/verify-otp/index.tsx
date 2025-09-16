"use client";
import ButtonLoading from "@components/ui/button-loading";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@components/ui/input-otp";
import { inter } from "@fonts";
import { cn } from "@lib/utils/cn.utils";
import MoveLeftIcon from "@public/icons/move-left";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormInput } from "@lib/types/forms/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordAuthProps } from "@lib/types/components/authentication";
import { handleNextAuthErrorMessage, onVerifyResetCode } from "@lib/handlers/authentication";
import { VerifyOTPSchema } from "@schema/authentication";
import AlertMessage from "@components/ui/alert-message";
import { VerifyResetCodeResponse } from "@lib/types/api/authentication";
import BoxMassageError from "@components/ui/box-massage-error";

export default function VerifyOTP({
  onSuccess,
  onBack,
  getEmail,
}: ForgotPasswordAuthProps & { getEmail: string }) {
  // State to control when the form's submit button should be disabled.
  // It prevents submitting until the React Hook Form script is fully loaded/ready.
  const [isReady, setReady] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput<typeof VerifyOTPSchema>>({ resolver: zodResolver(VerifyOTPSchema) });
  const [isShowSuccessfulAlert, setShowSuccessfulAlert] = useState<boolean>(false);
  const [messageResponse, setMessageResponse] = useState<string>("");
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
      {isShowSuccessfulAlert && messageResponse && (
        <AlertMessage status={isShowSuccessfulAlert} message={messageResponse} />
      )}

      {/* form verify otp */}
      <form
        className={cn("h-auto w-full p-32 flex flex-col flex-shrink-0 items-start justify-center")}
        onSubmit={handleSubmit(async (data) => {
          const isSuccess = await onVerifyResetCode(data);
          if (isSuccess && onSuccess) {
            setShowSuccessfulAlert(true);
            setMessageResponse((isSuccess as VerifyResetCodeResponse).status);
          }
        })}
      >
        {/* button back page */}
        <button
          className="h-10 w-10 mb-10 flex items-center justify-center border border-solid border-gray-200"
          type="button"
          onClick={onBack}
        >
          <MoveLeftIcon />
        </button>

        {/* title */}
        <h1 className={cn("text-3xl text-gray-800 font-bold", inter.className)}>Verify OTP</h1>

        {/* description */}
        <p className="mb-7 text-gray-500">
          Please enter the 6-digits code we have sent to: <br />
          <span className={cn("text-gray-800 font-medium")}>
            {getEmail}{" "}
            <button
              role="link"
              type="button"
              onClick={onBack}
              className={cn("text-blue-600 underline")}
            >
              Edit
            </button>
          </span>
        </p>

        {/* form input OTP */}
        <Controller
          control={control}
          name="resetCode"
          render={({ field }) => (
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
              <InputOTPGroup className="gap-4 !rounded-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    className="h-10 w-10 !rounded-none border-gray-200"
                    index={i}
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />

        {/* when error */}
        {errors.resetCode && (
          <p className="invalid | text-sm text-red-600">{errors.resetCode.message}</p>
        )}

        {/* when error display box message */}
        {messageError && <BoxMassageError message={messageError} />}

        {/* button submit */}
        <button
          className="w-full mt-10 p-3 flex items-center gap-2 justify-center bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          // onClick={handleClick}
          disabled={isReady || isSubmitting}
        >
          {isSubmitting ? <ButtonLoading /> : "Verify Code"}
        </button>

        {/* link create new account */}
        <p className="w-full mt-9 text-center text-lg text-gray-500">
          Don’t have an account?{" "}
          <Link className="text-blue-600 text-lg" href="/auth/register">
            Create yours
          </Link>
        </p>
      </form>
    </>
  );
}
