"use client";
import PhoneDropdown from "@components/ui/phone-dropdown";
import ButtonLoading from "@components/ui/button-loading";
import { driverOptions } from "@/configuration/driver";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { FormInput } from "@lib/types/forms/form";
import { cn } from "@lib/utils/cn.utils";
import { FormAccountSchema } from "@schema/dashboard/form-account/form-account";
import { DriverProvider, StepComponent, useDriver } from "driverjs-react";
import { useForm } from "react-hook-form";

export default function UserProfileForm() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInput<typeof FormAccountSchema>>();
  const { driver } = useDriver();

  //  if (driver && true) {
  driver?.destroy();
  //  }

  return (
    <DriverProvider driverOptions={driverOptions}>
      <form
        className={cn("user | p-6 flex flex-col items-start justify-center")}
        // onSubmit={handleSubmit(onSubmitRegister)}
      >
        <div className="w-full flex items-center justify-between gap-3">
          {/* firstName filed */}
          <div
            className={cn(
              "firstName | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium"
            )}
          >
            <StepComponent
              key={0}
              stepIndex={0}
              popover={{ title: "Enter First name", description: "Enter First name for edit" }}
            >
              <Label htmlFor="firstName">First Name</Label>
              <Input
                className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                type="text"
                id="firstName"
                {...register("firstName")}
                placeholder="Ahmed"
                autoComplete="name"
              />
            </StepComponent>
            {errors.firstName && (
              <p className="invalid | text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          {/* lastName filed */}
          <div
            className={cn(
              "lastName | w-full mb-4 flex flex-col flex-auto gap-2 text-gray-800 font-medium"
            )}
          >
            <StepComponent
              key={1}
              stepIndex={1}
              popover={{ title: "Enter Last name", description: "Enter Last name for edit" }}
            >
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                type="text"
                id="lastName"
                {...register("lastName")}
                placeholder="Abdullah"
                autoComplete="family-name"
              />
            </StepComponent>
            {errors.lastName && (
              <p className="invalid | text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* username filed */}
        <div className={cn("username | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
          <StepComponent
            key={2}
            stepIndex={2}
            popover={{ title: "Enter Username", description: "Enter Username for edit" }}
          >
            <Label htmlFor="username">Username</Label>
            <Input
              className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
              type="text"
              id="username"
              {...register("username")}
              placeholder="user123"
              autoComplete="username"
            />
          </StepComponent>
          {errors.username && (
            <p className="invalid | text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>

        {/* email filed */}
        <div className={cn("email | w-full mb-4 flex flex-col gap-2 text-gray-800 font-medium")}>
          <StepComponent
            key={3}
            stepIndex={3}
            popover={{ title: "Email", description: "Email for edit" }}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              className="h-12 border-gray-200 placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
              type="text"
              id="email"
              {...register("email")}
              placeholder="user@example.com"
              autoComplete="email"
            />
          </StepComponent>
          {errors.email && <p className="invalid | text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* phone filed */}
        <div className={cn("phone | w-full mb-8 flex flex-col gap-2 text-gray-800 font-medium")}>
          <StepComponent
            key={5}
            stepIndex={5}
            popover={{ title: "Phone number", description: "write your Phone number now for edit" }}
          >
            <Label htmlFor="phone">Phone</Label>
            <div className="flex flex-row-reverse items-center gap-2 border border-solid border-gray-200">
              <Input
                className="h-12 border-none placeholder:text-gray-400 focus:border-blue-600 transition-border duration-200"
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="1012345678"
                autoComplete="mobile tel"
              />
              <PhoneDropdown />
            </div>
          </StepComponent>
          {errors.phone && <p className="invalid | text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        {/* buttons group */}
        <div className={cn("w-full flex items-center gap-4")}>
          <StepComponent
            key={6}
            stepIndex={6}
            popover={{
              title: "Delete My Account",
              description: "for Delete My Account Phone number for edit",
            }}
          >
            <button
              className="w-full p-3 flex-auto bg-red-50 text-red-600 font-sm font-medium hover:bg-red-100 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
              // onClick={handleClick}
              // disabled={isReady || isSubmitting}
            >
              {isSubmitting ? <ButtonLoading /> : "Delete My Account"}
            </button>
          </StepComponent>

          <StepComponent
            key={7}
            stepIndex={7}
            popover={{
              title: "Save Changes My Account",
              description: "for Save Changes My Account Phone number for edit",
            }}
          >
            <button
              className="w-full p-3 flex-auto bg-blue-600 text-white font-sm font-medium hover:bg-blue-700 transition-background-color duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
              // onClick={handleClick}
              // disabled={isReady || isSubmitting}
            >
              {isSubmitting ? <ButtonLoading /> : "Save Changes"}
            </button>
          </StepComponent>
        </div>
      </form>
    </DriverProvider>
  );
}
