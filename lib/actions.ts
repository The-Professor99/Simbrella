'use server';

import { signIn, signUp } from '@/auth';
import { FirebaseError } from 'firebase/app';
import { AuthError } from 'next-auth';
import { format_text } from './utils';
import { redirect } from 'next/navigation';
import { routes } from './routes';

export async function authenticateUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      const firebaseErr = error.cause?.err as FirebaseError;
      switch (firebaseErr?.code) {
        case 'auth/invalid-credential':
          return 'Invalid credentials.';
        case 'auth/wrong-password':
          return 'The password or email is not valid.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const isValidationError = (error: any) => {
  return error && error.type === 'ValidationErrors';
};

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signUp(formData);
  } catch (error: any) {
    if (error instanceof FirebaseError) {
      const formatted_code = format_text(error.code.replace('auth/', '')); // firebase auth errors are prefixed with auth/
      return {
        firebase: {
          message: formatted_code,
        },
      };
    } else if (isValidationError(error)) {
      return error.error;
    }
    throw error;
  }
  redirect(routes.login.path);
}
