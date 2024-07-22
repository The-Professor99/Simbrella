'use client';
import { FormInputField } from './form-field';
import { SubmitButton } from './submit-button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { registerUser } from '@/lib/actions';

export default function RegisterForm() {
  const [errors, formAction] = useFormState(registerUser, {});

  return (
    <form action={formAction}>
      <div className="grid gap-y-4">
        <FormInputField
          label="Email address"
          type="email"
          name="email"
          placeholder="Please enter your email"
          required
          errorMessage={errors.email?.message}
        />

        <FormInputField
          label="Password"
          type="password"
          name="password"
          required
          placeholder="Please enter your password"
          errorMessage={errors.password?.message}
        />

        <FormInputField
          label="Confirm Password"
          placeholder="Confirm password"
          type="password"
          required
          name="confirmPassword"
          errorMessage={errors.confirmPassword?.message}
        />
        {errors.firebase?.message && (
          <div className="flex h-8 items-end space-x-1">
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errors.firebase.message}</p>
            </div>
          </div>
        )}

        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
}
