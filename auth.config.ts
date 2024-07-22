import type { NextAuthConfig } from 'next-auth';
import { routes } from './lib/routes';

export const authConfig = {
  pages: {
    signIn: routes.login.path,
    signOut: routes.register.path,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith(routes.profile.path);
      const isOnLogin = nextUrl.pathname.startsWith(routes.login.path);
      const isOnRegister = nextUrl.pathname.startsWith(routes.register.path);

      if (isOnProfile && !isLoggedIn) {
        return false;
      }

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL(routes.profile.path, nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
