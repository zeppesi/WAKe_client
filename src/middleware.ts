import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const tokenFromServer = queryParams.get(
    process.env.NEXT_PUBLIC_JWT_TOKEN_KEY ?? '',
  );

  if (tokenFromServer) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.search = '';
    const res = NextResponse.redirect(redirectUrl);
    res.cookies.set(
      process.env.NEXT_PUBLIC_JWT_TOKEN_KEY ?? '',
      tokenFromServer,
    );
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
