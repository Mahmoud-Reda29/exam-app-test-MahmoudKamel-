import { FormInput } from "@lib/types/forms/form";
import { SubmitHandler } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { postForgotPassword, postSignup, postVerifyResetCode, putNewPassword } from "@lib/api/authentication";
import { ForgotPasswordSchema, LoginSchema, NewPasswordSchema, RegisterSchema, VerifyOTPSchema } from "@schema/authentication";

let messageError:string = "";

export const onSubmitLogin: SubmitHandler<FormInput<typeof LoginSchema>> = async (data) => {       
       // response from next-auth signIn function 
       const response = await signIn("credentials", {
              email: data.email,
              password: data.password,
              redirect: false,
              // callbackUrl: "/"
       });       
       
       // If there is an error, set the messageError variable to the error message
       if(response?.error) {
              messageError = response.error;
              return;
       }

       // If the response is ok, redirect to the home page
       if(response?.ok) {
              const session = await getSession();
              if(session) location.href = "/";
       };
};

export const onSubmitRegister:SubmitHandler<FormInput<typeof RegisterSchema>> = async (data) => {
       const response = await postSignup(data);
       // console.log(data);
       if(response.message === "success")  location.href ="/auth/login";
       
};

export const onForgotPassword:SubmitHandler<FormInput<typeof ForgotPasswordSchema>> = async (data) => {
       const response = await postForgotPassword(data);
       if(response.message !== "success") {
              messageError = response.message;
              return false;
       };
       return response;
};

export const onVerifyResetCode:SubmitHandler<FormInput<typeof VerifyOTPSchema>> = async (data) => {
       const response = await postVerifyResetCode(data);
       if(response.status !== "Success") {
              messageError = response.message;
              return false;
       };
       return response;
};

export const onNewPassword:SubmitHandler<FormInput<typeof NewPasswordSchema>> = async (data) => {
       delete data.confirmPassword;
       const response = await putNewPassword(data);
       if(response.message !== "success") {
              messageError = response.message;
              return false;
       };
       if(response.message === "success") return true;

};

export const handleNextAuthErrorMessage = ():string =>  messageError;