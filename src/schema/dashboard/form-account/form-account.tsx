import { z } from "zod";

export const FormAccountSchema = z
       // Define the form schema
       .object({
                            // username: required, length between 4 and 6 characters
              firstName: z
                     .string()
                     .nonempty({ message: "Your firstName is required" })
                     .min(3, { message: "is less 4" })
                     .max(15, { message: "is more 15" }),

              // username: required, length between 4 and 6 characters
              lastName: z
                     .string() 
                     .nonempty({ message: "Your lastName is required" })
                     .min(4, { message: "is less 4" })
                     .max(15, { message: "is more 15" }),

              // username: required, length between 4 and 6 characters
              username: z
                     .string()
                     .nonempty({ message: "Your username is required" })
                     .min(4, { message: "is less 4" }),

              // email: required, must be a valid email format
              email: z
                     .string()
                     .nonempty({ message: "Your email is required" })
                     .email({ message: "invalid email" }),

              // phone: required, must match Egyptian or Saudi phone format
              phone: z
                     .string()
                     .nonempty({ message: "Your phone is required" })
                     .regex(
                            /^(010|011|012|015)[0-9]{8}$|^05[0-9]{8}$/,
                            { message: "Phone must be Egyptian or Saudi format" }
                     ),
       });
