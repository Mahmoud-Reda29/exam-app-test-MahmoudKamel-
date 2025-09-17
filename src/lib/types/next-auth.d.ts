/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    token: string;
    user: {
      _id: string;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      isVerified: boolean;
      createdAt: string;
    };
  }

  interface Session {
    user: User["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User["user"];
    token: string;
  }
}
