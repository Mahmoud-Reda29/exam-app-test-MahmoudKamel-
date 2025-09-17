"use server";
import { DEFAULT_API_HEADERS } from "@lib/constants";
import {
  AuthResponse,
  ForgetPasswordData,
  ForgetPasswordResponse,
  LoginData,
  NewPasswordData,
  NewPasswordResponse,
  VerifyResetCodeData,
  VerifyResetCodeResponse,
} from "@lib/types/api/authentication";

/**
 * Authenticates user with email and password
 * @param data - Login credentials containing email and password
 * @returns Promise with authentication response (user data and token)
 * @throws Error if request fails or network error occurs
 */
export async function postLogin(data: LoginData): Promise<AuthResponse> {
  try {
    const response = await fetch(`${process.env.API}/auth/signin`, {
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
      method: "PUT",
      headers: DEFAULT_API_HEADERS,
      body: JSON.stringify(data),
    });

    const payload = await response.json();

    if ("code" in payload) {
      throw new Error(payload.message);
    }

    return payload;
  } catch (error) {
    throw new Error(`is error ${error}`);
  }
}

// export async function getUserToken(): Promise<JWT> {
//   try {
//     const response = await fetch(`http://localhost:3000/api/auth/token`);
//     const data = await response.json();
//     return response.json();
//   } catch (error) {
//     throw new Error(`is error ${error}`);
//   }
// }
// getUserToken();
