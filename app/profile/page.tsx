import { signOut } from '@/auth';
import { SubmitButton } from '@/components/auth/submit-button';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function () {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        WIP | Your profile details will appear here
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className="flex justify-center mt-4"
        >
          <div className="max-w-40">
            <SubmitButton>
              <PowerIcon className="w-6" />
              <div>Sign Out</div>
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
