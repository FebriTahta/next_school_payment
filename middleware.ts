import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {validateJWT} from "@/lib/jwt";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("authToken")?.value;
  const protectedPaths = ["/home","/payment-list"];
  const loginPath = "/login"; // Halaman login
  const homeUrl = new URL("/home", req.url); // URL untuk redirect ke home
  const loginUrl = new URL("/login", req.url); // URL untuk redirect ke login

  // Jika token tersedia, valid, dan pengguna mengakses halaman login, redirect ke /home
  if (pathname === loginPath) {
    if (token) {
      try {
        const payload = await validateJWT(token);

        if (payload && (!payload.exp || payload.exp * 1000 > Date.now())) {
          console.log("Token valid, mengarahkan ke /home");
          return NextResponse.redirect(homeUrl.href);
        }
      } catch (error) {
        console.error("Kesalahan validasi token di halaman login:", error);
        // Lanjutkan ke halaman login jika token invalid
      }
    }
  }

  // Jika pengguna mengakses halaman yang dilindungi tanpa token atau token invalid
  if (protectedPaths.includes(pathname)) {
    if (!token) {
      console.error("Token tidak ditemukan");
      return NextResponse.redirect(loginUrl.href);
    }

    try {
      const payload = await validateJWT(token);

      if (!payload) {
        console.error("Token invalid");
        return NextResponse.redirect(loginUrl.href);
      }

      if (payload.exp && payload.exp * 1000 <= Date.now()) {
        console.error("Token sudah kadaluarsa");
        return NextResponse.redirect(loginUrl.href);
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Kesalahan validasi token:", error);
      return NextResponse.redirect(loginUrl.href);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login", "/payment-list"], // Middleware berlaku untuk /home dan /login
};
