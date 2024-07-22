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
      if (isOnProfile) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
