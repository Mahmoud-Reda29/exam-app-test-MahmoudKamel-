import { Metadata } from "next";
import FormRegister from "@components/features/authentication/form-register";

export const metadata:Metadata = {
       title: "register account",
       description: "register account exam app",
};

export default function Register() {
       return (
              <FormRegister />
       );
}
