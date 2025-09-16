import { getUserToken } from "@lib/api/authentication";
// import { JWT } from "next-auth/jwt";

export async function extractUserToken() {
  return await getUserToken();
}

export async function resolveUserToken() {
  //
}
