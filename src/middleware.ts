import { withClerk, withClerkMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  return NextResponse.next();
});

// Don't run middleware on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
