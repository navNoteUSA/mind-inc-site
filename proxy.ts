import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isProductionApex = host === "mind-inc.io";

  if (isProductionApex) {
    const url = request.nextUrl.clone();
    url.host = "www.mind-inc.io";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
