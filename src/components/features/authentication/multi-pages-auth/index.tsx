"use client";
import { useForm } from "react-hook-form";
import { FormField, FormItem } from "../../../ui/form";
import { useState } from "react";
import FormForgotPassword from "@components/features/authentication/form-forgot-password";
import VerifyOTP from "@components/features/authentication/verify-otp";
import FormNewPassword from "@components/features/authentication/form-new-password";

export default function MultiPagesAuth() {
       const { control } = useForm();
       const [email, setEmail] = useState<string>("");
       const [step, setStep] = useState<number>(0);
       const handleSuccess = () => setStep((prev) => prev + 1);
       const handleBack = () => {setStep((prev) => (prev > 0 ? prev - 1 : prev));};
       const getEmail = (email:string) => {setEmail(email);};
       const pages = [ 
              <FormForgotPassword key={0} onSuccess={handleSuccess} setEmail={getEmail} />, 
              <VerifyOTP key={1} onSuccess={handleSuccess} onBack={handleBack} getEmail={email} />, 
              <FormNewPassword key={2} onBack={handleBack} getEmail={email} />
       ];       

       return (
       <FormField
              control={control}
              name="form-forgot-password"
              render={() => (
                     <>
                     <FormItem className="h-full w-full shrink">
                            {pages[step]}
                     </FormItem>
                     </>
              )}
       />
       );
}
