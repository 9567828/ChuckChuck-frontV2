import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isLogin = req.cookies.get("isLogin")?.value === "true";
  const userId = req.cookies.get("userId");
  const autoLogin = req.cookies.get("autoLogin")?.value === "true";

  const { pathname } = req.nextUrl;
  const redirectUrl = new URL("/login", req.url);

  if (!isLogin && pathname === "/") {
    res.cookies.delete("isLogin");
    res.cookies.delete("userId");
    res.cookies.delete("autoLogin");
    return NextResponse.redirect(redirectUrl);
  }

  if (autoLogin && !userId) {
    res.cookies.delete("isLogin");
    res.cookies.delete("autoLogin");
    return NextResponse.redirect(redirectUrl);
  }

  if (isLogin && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|imgs|manifest.json|robots.txt|sitemap.xml|.well-known).*)"],
};
