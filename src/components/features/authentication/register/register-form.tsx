"use client";

import Link from "next/link";
import PhoneDropdown from "@components/ui/phone-dropdown";
import ButtonLoading from "@components/ui/button-loading";
import { cn } from "@lib/utils/cn.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@lib/types/forms/form";
import { useForm } from "react-hook-form";
import { inter } from "@fonts";
import { useIsReadyComponent } from "@lib/hooks/useIsReadyComponent";
import { RegisterSchema } from "@schema/authentication";
import { Input } from "@components/ui/input";
import { InputPassword } from "@components/ui/input-password";

// shadcn form components
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import useRegister from "@app/(authentication)/auth/register/_hooks/use-register";
import BoxMassageError from "@components/ui/box-massage-error";

export default function RegisterForm() {
  // Hooks
  const { isReady } = useIsReadyComponent();
  const { register, error, isPending } = useRegister();
  // Form & Schema
  const form = useForm<FormInput<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  // temp handler
  const onSubmitHandler = (values: FormInput<typeof RegisterSchema>) => {
    register(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className={cn("w-1/2 p-32 flex flex-col items-start justify-center")}
      >
        <h1 className={cn("mb-7 text-3xl text-gray-800 font-bold", inter.className)}>
          Create Account
        </h1>

        {/* First + Last Name */}
        <div className="w-full flex items-center justify-between gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium">
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    placeholder="Ahmed"
                    autoComplete="name"
                    disabled={isReady}
                    className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium">
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    placeholder="Abdullah"
                    autoComplete="family-name"
                    disabled={isReady}
                    className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />
        </div>

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium">
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Input
                  id="username"
                  placeholder="user123"
                  autoComplete="username"
                  disabled={isReady}
                  className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* Email */}
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
                  autoComplete="email"
                  disabled={isReady}
                  className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium">
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl>
                <div className="flex flex-row-reverse items-center gap-2 border border-solid border-gray-200">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="1012345678"
                    autoComplete="mobile tel"
                    disabled={isReady}
                    className="h-12 border-none placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                    {...field}
                  />
                  <PhoneDropdown disabled={isReady} />
                </div>
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* Password */}
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
                  className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col gap-2 text-gray-800 font-medium">
              <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
              <FormControl>
                <InputPassword
                  id="confirm-password"
                  placeholder="••••••••"
                  disabled={isReady}
                  className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />
        {/* Error */}
        {error && <BoxMassageError message={error.message} />}

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-10 p-3 bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          disabled={isReady || form.formState.isSubmitting || isPending}
        >
          {form.formState.isSubmitting || isPending ? <ButtonLoading /> : "Create Account"}
        </button>

        <p className="w-full mt-9 text-center text-lg text-gray-500">
          Already have an account?{" "}
          <Link className="text-blue-600 text-lg" href="/auth/login">
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
}
