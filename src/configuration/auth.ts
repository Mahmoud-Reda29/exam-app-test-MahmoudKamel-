import { postLogin } from "@lib/api/authentication";
import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface CustomUser extends User {
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication pages
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        // if credentials is undefined throw error
        if (!credentials) throw new Error("Something went wrong credentials");

        const response = await postLogin({
          email: credentials.email,
          password: credentials.password,
        });

        // If no error and we have user data, return it
        if (response.message === "success" && response.user) {
          const { user } = response;

          return {
            id: user._id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
          } as User;
        }

        // Return error if user data could not be retrieved
        throw new Error("Something went wrong");
      },
    }),
  ],
  // Configure one or more authentication callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.accessToken = (user as CustomUser).accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user = token.user as User;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
