import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className=" size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div
        className="mt-7 duration-500 mt-0  ease-out transition-all sm:max-w-xs sm:w-full m-3 sm:mx-auto flex justify-center
      items-center h-full "
      >
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
          <div className="absolute top-2 end-2">
            <button
              type="button"
              className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 text-center overflow-y-auto">
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
              {title}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
