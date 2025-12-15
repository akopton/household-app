import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { NextRequest, NextResponse } from "next/server"
import { isAuthenticated } from "./lib/auth"

const intlMiddleware = createMiddleware(routing)

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}

const protectedRoutes = ["/dashboard", "/profile"]
const publicRoutes = ["/", "/auth/login", "/auth/register"]

const normalizePathname = (pathname: string, locales: readonly string[]) => {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length > 0 && locales.includes(segments[0])) {
    return "/" + segments.slice(1).join("/")
  }

  return pathname
}

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const normalizedPath = normalizePathname(path, routing.locales)

  const isProtectedRoute = protectedRoutes.includes(normalizedPath)
  const isPublicRoute = publicRoutes.includes(normalizedPath)

  const authenticated = await isAuthenticated()

  if (isProtectedRoute && !authenticated) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  if (isPublicRoute && authenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return intlMiddleware(req)
}
