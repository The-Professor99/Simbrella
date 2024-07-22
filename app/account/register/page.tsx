import RegisterForm from '@/components/auth/register-form';
import { routes } from '@/lib/routes';

export default async function Register() {
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign up
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Already have an account?{' '}
            <a
              className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
              href={routes.login.path}
            >
              Sign in here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
