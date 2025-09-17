"use server";

import { DEFAULT_API_HEADERS } from "@lib/constants";
import { SignupData } from "@lib/types/api/authentication";

export const registerAction = async (data: SignupData) => {
  try {
    const response = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
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
};
