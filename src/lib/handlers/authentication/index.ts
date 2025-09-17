import { FormInput } from "@lib/types/forms/form";
import { SubmitHandler } from "react-hook-form";
import { postForgotPassword, postVerifyResetCode, putNewPassword } from "@lib/api/authentication";
import { ForgotPasswordSchema, NewPasswordSchema, VerifyOTPSchema } from "@schema/authentication";

let messageError: string = "";

export const onForgotPassword: SubmitHandler<FormInput<typeof ForgotPasswordSchema>> = async (
  data
) => {
  const response = await postForgotPassword(data);
  if (response.message !== "success") {
    messageError = response.message;
    return false;
  }
  return response;
};

export const onVerifyResetCode: SubmitHandler<FormInput<typeof VerifyOTPSchema>> = async (data) => {
  const response = await postVerifyResetCode(data);
  if (response.status !== "Success") {
    messageError = response.message;
    return false;
  }
  return response;
};

export const onNewPassword: SubmitHandler<FormInput<typeof NewPasswordSchema>> = async (data) => {
  delete data.confirmPassword;
  const response = await putNewPassword(data);
  if (response.message !== "success") {
    throw new Error(response.message);
  }
  if (response.message === "success") window.location.href = "/auth/login";
};

export const handleNextAuthErrorMessage = (): string => messageError;
