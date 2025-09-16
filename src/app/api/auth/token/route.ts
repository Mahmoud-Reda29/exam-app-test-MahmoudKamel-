import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  // if(token) console.log("JSON Web Token", JSON.stringify(token, null, 2))

  // console.log("token is ", request);
  // console.log("accessToken is ", token?.accessToken);

  return NextResponse.json({
    hasToken: !!token,
    accessToken: token?.accessToken,
  });
}
