export function FormInputField({
  label,
  name,
  errorMessage,
  ...props
}: {
  label: string;
  name: string;
  errorMessage?: string;
} & React.ComponentProps<'input'>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm my-2 dark:text-white text-left"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          className="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          {...props}
        />
      </div>
      {errorMessage && (
        <p className="text-xs text-red-600 mt-2" id={`${name}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export function FormSelectField({
  label,
  name,
  placeholder,
  children,
  errorMessage,
  ...props
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  placeholder: string;
  errorMessage?: string;
} & React.ComponentProps<'select'>) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium my-2 dark:text-white text-left"
      >
        {label}
      </label>

      <select
        name={name}
        className="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
    </div>
  );
}
