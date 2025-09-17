import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token?.token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = req.nextUrl.searchParams;
  const limit = params.get("limit");
  const page = params.get("page");

  const url = `${process.env.API}/subjects?limit=${limit}&page=${page}`;

  const response = await fetch(url, {
    headers: {
      token: `${token.token}`,
    },
  });
  if (response.status !== 200) {
    return NextResponse.json({ error: "Failed to fetch subjects" }, { status: response.status });
  }

  const payload = await response.json();

  return NextResponse.json(payload);
}
