"use client";

import Link from "next/link";
import BoxMassageError from "@components/ui/box-massage-error";
import { cn } from "@lib/utils/cn.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@components/ui/input";
import { InputPassword } from "@components/ui/input-password";
import { LoginSchema } from "@schema/authentication";
import type { FormInput } from "@lib/types/forms/form";
import ButtonLoading from "@components/ui/button-loading";
import { useIsReadyComponent } from "@lib/hooks/useIsReadyComponent";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import useLogin from "@app/(authentication)/auth/login/_hooks/use-login";

export default function FormLogin() {
  // Hooks
  const { isReady } = useIsReadyComponent();
  const { Login, error, isPending } = useLogin();

  // Form & Schema
  const form = useForm<FormInput<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmitHandler = (values: FormInput<typeof LoginSchema>) => {
    Login(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className={cn("w-1/2 p-32 flex flex-col items-start justify-center")}
      >
        {/* Title */}
        <h1 className="mb-7 text-3xl text-gray-800 font-bold">Login</h1>

        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="text"
                  placeholder="user@example.com"
                  aria-label="input email"
                  autoComplete="email"
                  disabled={isReady}
                  className={cn(
                    "h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200",
                    form.formState.errors.email && "!border-red-600"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* Password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium">
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <InputPassword
                  id="password"
                  placeholder="••••••••"
                  disabled={isReady}
                  className={cn(
                    "h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200",
                    form.formState.errors.password && "!border-red-600"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* forget Password Button */}
        <Link
          className="mt-3 text-end text-blue-600 text-lg font-medium self-end"
          href="/auth/forgot-password"
        >
          Forgot your password?
        </Link>

        {/* Error */}
        {error && <BoxMassageError message={error.message} />}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-10 p-3 bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          disabled={isReady || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting || isPending ? <ButtonLoading /> : "Login"}
        </button>

        {/* Register Button */}
        <p className="w-full mt-9 text-center text-lg text-gray-500">
          Don’t have an account?{" "}
          <Link className="text-blue-600 text-lg" href="/auth/register">
            Create yours
          </Link>
        </p>
      </form>
    </Form>
  );
}
