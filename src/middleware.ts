import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./services/session.service";

export default async function midleware(req: NextRequest) {
  const session = await getSession();

  if (!session?.token && req.nextUrl.pathname !== "/login") {
    const redirectLogin = new URL("/login", req.url);
    return NextResponse.redirect(redirectLogin);
  }

  if (session?.token && req.nextUrl.pathname === "/login") {
    const redictAuthenticated = new URL("/", req.url);
    return NextResponse.redirect(redictAuthenticated);
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/pedidos",
    "/produtos",
    "/faturamento",
    "/gerenciar",
  ],
};
