import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const access = queryParams.get('access');
  const refresh = queryParams.get('refresh');

  if (access || refresh) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.search = '';
    const res = NextResponse.redirect(redirectUrl);

    if (access) {
      res.cookies.set('access', access, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60,
      });
    }
    if (refresh) {
      res.cookies.set('refresh', refresh, {
        httpOnly: true,
      });
    }

    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
