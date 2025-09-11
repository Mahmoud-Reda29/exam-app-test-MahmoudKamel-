import { z } from "zod";

export const ChangePasswordFormSchema = z
       // Define the form schema
       .object({
              // username: required, length between 4 and 6 characters
              currentPassword: z
                     .string()
                     .nonempty({ message: "Your password is required" })
                     .regex(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*(.)\1).{8,}$/,
                            {
                                   message:
                                          "Password must include uppercase, lowercase, number, special character, and no repeated chars",
                            }
                     ),
              newPassword: z
                     .string()
                     .nonempty({ message: "Your password is required" })
                     .regex(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*(.)\1).{8,}$/,
                            {
                                   message:
                                          "Password must include uppercase, lowercase, number, special character, and no repeated chars",
                            }
                     ),
              confirmNewPassword: z
                     .string()
                     .nonempty({ message: "Please confirm your new password" }),
                     
       })
       .refine((data) => data.newPassword === data.confirmNewPassword, {
              message: "Passwords do not match",
       });
