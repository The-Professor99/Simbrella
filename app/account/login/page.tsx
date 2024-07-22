import LoginForm from '@/components/auth/login-form';
import { routes } from '@/lib/routes';
import Link from 'next/link';

export default async function Login() {
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Don&apos;t have an account yet?{' '}
            <Link
              className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              href={routes.register.path}
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
