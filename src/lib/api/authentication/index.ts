"use server";
import { DEFAULT_API_HEADERS } from "@lib/constants";
import {
  AuthResponse,
  ForgetPasswordData,
  ForgetPasswordResponse,
  LoginData,
  NewPasswordData,
  NewPasswordResponse,
  SignupData,
  VerifyResetCodeData,
  VerifyResetCodeResponse,
} from "@lib/types/api/authentication";
import { JWT } from "next-auth/jwt";

/**
 * Authenticates user with email and password
 * @param data - Login credentials containing email and password
 * @returns Promise with authentication response (user data and token)
 * @throws Error if request fails or network error occurs
 */
export async function postLogin(data: LoginData): Promise<AuthResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
      method: "POST",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

/**
 * Registers a new user account
 * @param data - User signup data (email, password, firstName, lastName, etc.)
 * @returns Promise with signup response data
 * @throws Error if request fails or network error occurs
 */
export async function postSignup(data: SignupData): Promise<AuthResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

export async function postForgotPassword(
  data: ForgetPasswordData
): Promise<ForgetPasswordResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgotPassword`, {
      method: "POST",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

export async function postVerifyResetCode(
  data: VerifyResetCodeData
): Promise<VerifyResetCodeResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verifyResetCode`, {
      method: "POST",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

export async function putNewPassword(data: NewPasswordData): Promise<NewPasswordResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resetPassword`, {
      method: "POST",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

export async function getUserToken(): Promise<JWT> {
  try {
    const response = await fetch(`http://localhost:3000/api/auth/token`);
    const data = await response.json();
    return response.json();
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}
getUserToken();
