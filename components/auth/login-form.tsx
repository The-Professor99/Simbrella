'use client';

import { useFormState } from 'react-dom';
import { FormInputField } from './form-field';
import { SubmitButton } from './submit-button';
import { authenticateUser } from '@/lib/actions';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(authenticateUser, undefined);

  return (
    <form action={formAction}>
      <div className="grid gap-y-4">
        <FormInputField
          name="email"
          label="Email address"
          type="email"
          placeholder="Please enter your email"
          required
        />

        <FormInputField
          name="password"
          label="Password"
          type="password"
          required
          placeholder="Please enter your password"
        />

        {errorMessage && (
          <div className="flex h-8 items-end space-x-1">
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          </div>
        )}

        <SubmitButton>Sign In</SubmitButton>
      </div>
    </form>
  );
}
