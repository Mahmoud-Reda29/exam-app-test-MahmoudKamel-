import { z } from "zod";

export const VerifyOTPSchema = z
  // Define the form schema
  .object({
    // email: required, must be a valid email format
    verifyOTP: z
      .string()
      .nonempty({ message: "Your email is required" })
      .length(6, { message: "OTP must be 6 characters long" }),
  });
