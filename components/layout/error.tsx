export default function ErrorUI({ resetAction }: { resetAction: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">
        Something went wrong!
        <br />
        This could be a temporary issue, please try your action again.
      </h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={resetAction}
      >
        Try again
      </button>
    </div>
  );
}
