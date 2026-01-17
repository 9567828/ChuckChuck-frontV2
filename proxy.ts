import { NextRequest, NextResponse } from "next/server";
import { tempToken } from "./utils/tempUser";

export async function proxy(req: NextRequest) {
  const res = NextResponse.next();

  const token = req.cookies.get("token")?.value;
  const isLogin = tempToken.some((t) => t === token);

  const autoLogin = req.cookies.get("autoLogin")?.value === "true";

  const { pathname } = req.nextUrl;
  const redirectUrl = new URL("/auth/login", req.url);

  if (!isLogin && pathname === "/") {
    res.cookies.delete("isLogin");
    res.cookies.delete("autoLogin");
    return NextResponse.redirect(redirectUrl);
  }

  if (autoLogin && !isLogin) {
    res.cookies.delete("isLogin");
    res.cookies.delete("autoLogin");
    return NextResponse.redirect(redirectUrl);
  }

  if (isLogin && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|imgs|manifest.json|robots.txt|sitemap.xml|.well-known).*)"],
};
