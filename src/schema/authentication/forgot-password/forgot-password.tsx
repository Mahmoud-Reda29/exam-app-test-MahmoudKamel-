import { z } from "zod";

export const ForgotPasswordSchema = z
  // Define the form schema
  .object({
    // email: required, must be a valid email format
    email: z
      .string()
      .nonempty({ message: "Your email is required" })
      .email({ message: "invalid email" }),
  });
