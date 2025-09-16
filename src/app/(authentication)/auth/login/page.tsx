import { Metadata } from "next";
import FormLogin from "@components/features/authentication/form-login";

export const metadata: Metadata = {
  title: "login account",
  description: "login account exam app",
};

export default function Login() {
  return <FormLogin />;
}
