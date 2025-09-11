import { z } from "zod";

/**
 * `LoginSchema` - Basic authentication validation
 * `Simple email + password` login form
 * `No strict validation rules applied`
 */
export const LoginSchema = z
       .object({
              email: z
                     .string()
                     .nonempty({ message: "Your email is required" }),
              password: z
                     .string()
                     .nonempty({ message: "Your password is required" })
       });


/**
 * RegisterSchema - Complete user registration validation
 * Multi-field form with strict validation rules
 * Includes password confirmation matching
 * 
 * Validation Rules:
 * - `Name fields`: 3-15 chars (firstName), 4-15 chars (lastName)
 * - `Username`: min 4 chars
 * - `Email`: valid format required
 * - `Phone`: Egyptian (010/011/012/015) or Saudi (05) format
 * - `Password`: Strong pattern with uppercase, lowercase, digit, special char, no repeats, 8+ chars
 * - `Password confirmation`: Must match password field
 */
export const RegisterSchema = z
       .object({
              firstName: z
                     .string()
                     .nonempty({ message: "Your firstName is required" })
                     .min(3, { message: "is less 4" })
                     .max(15, { message: "is more 15" }),
              lastName: z
                     .string() 
                     .nonempty({ message: "Your lastName is required" })
                     .min(4, { message: "is less 4" })
                     .max(15, { message: "is more 15" }),
              username: z
                     .string()
                     .nonempty({ message: "Your username is required" })
                     .min(4, { message: "is less 4" }),
              email: z
                     .string()
                     .nonempty({ message: "Your email is required" })
                     .email({ message: "invalid email" }),
              // Regex: Egyptian (010|011|012|015 + 8 digits) OR Saudi (05 + 8 digits)
              country: z.enum(["egypt", "saudi"]).optional(),

              phone: z
                     .string()
                     .nonempty({ message: "Your phone is required" })
                     .regex(
                            /^(010|011|012|015)[0-9]{8}$|^05[0-9]{8}$/,
                            { message: "Phone must be Egyptian or Saudi format" }
                     ),
              // Strong password regex: uppercase + lowercase + digit + special + no repeats + 8+ chars
              password: z
                     .string()
                     .nonempty({ message: "Your password is required" })
                     .regex(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*(.)\1).{8,}$/,
                            {
                                   message:
                                          "Password must include uppercase, lowercase, number, special character, and no repeated chars",
                            }
                     ),
              rePassword: z.string().nonempty({ message: "Your confirm password is required" }),
       })
       // Cross-field validation: password must match rePassword
       .refine((data) => data.password === data.rePassword, {
              message: "Passwords do not match",
              path: ["rePassword"],
       });


/**
 * `ForgotPasswordSchema` - Password recovery validation
 * Single email field with format validation
 */
export const ForgotPasswordSchema = z
       .object({
              email: z
                     .string()
                     .nonempty({ message: "Your email is required" })
                     .email({ message: "invalid email" }),
       });

       
/**
 * `VerifyOTPSchema` - OTP code verification
 *` Validates 6`-character verification code
 * Currently accepts any 6 characters (could be restricted to digits only)
 */
export const VerifyOTPSchema = z
       .object({
              resetCode: z
                     .string()
                     .nonempty({ message: "Your email is required" })
                     .length(6, { message: "OTP must be 6 characters long" }),
       });


export const NewPasswordSchema = z
       .object({
              email: z
                     .string(),
              newPassword: z
                     .string()
                     .nonempty({ message: "Your new password is required" })
                     .regex(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*(.)\1).{8,}$/,
                            {
                                   message:
                                          "Password must include uppercase, lowercase, number, special character, and no repeated chars",
                            }
                     ),
                     
              confirmPassword: z.string().nonempty({ message: "Your confirm confirm password is required" }).optional(),
       })
       // Cross-field validation: new-password must match confirm-password
       .refine((data) => data.newPassword === data.confirmPassword, {
              message: "Passwords do not match",
              path: ["confirmPassword"],
       });
