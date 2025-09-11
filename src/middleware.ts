// import { extractUserToken } from "@lib/utils/get-user-token.utils";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request:NextRequest){
       // check is should token  
       const token = await getToken({ req: request });
       const authenticationRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"];
              
       // if(token) extractUserToken(token);

       if(!authenticationRoutes.includes(request.nextUrl.pathname) && !token) 
              return redirectToLogin(request);     

       if(authenticationRoutes.includes(request.nextUrl.pathname) && token) 
              return redirectToApp(request);


       return NextResponse.next();
}

function redirectToLogin(request:NextRequest){
       const url = new URL("/auth/login", request.nextUrl.origin);
       return NextResponse.redirect(url);
}

function redirectToApp(request:NextRequest){
       // Get the last visited route from session/cookie or default to dashboard
       const lastRoute = request.cookies.get("next-auth.callback-url")?.value || "/";
       
       // Fallback to home if no valid last route
       const redirectPath = request.nextUrl.pathname.includes("/auth") ? "/" : lastRoute;    
       
       const url = new URL(redirectPath, request.nextUrl.origin);
       return NextResponse.redirect(url);
}

export const config = {
       matcher: [
              "/auth/login", "/auth/register", "/auth/forgot-password",
              "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
       ],
};
