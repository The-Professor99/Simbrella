import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { firebaseAuth } from './lib/firebase/firebaseApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { registrationSchema } from './lib/schema';
import { transformErrors } from './lib/utils';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string(),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const { user } = await signInWithEmailAndPassword(
            firebaseAuth,
            email,
            password
          );
          return user;
        }

        return null;
      },
    }),
  ],
});

export const signUp = async (formData: FormData) => {
  const credentials: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    credentials[key] = value as string;
  });
  const parsedCredentials = registrationSchema.safeParse(credentials);

  if (parsedCredentials.success) {
    const { email, password } = parsedCredentials.data;

    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    return user;
  }
  const error = {
    type: 'ValidationErrors',
    error: transformErrors(parsedCredentials.error?.errors || []),
  };
  throw error;
};
