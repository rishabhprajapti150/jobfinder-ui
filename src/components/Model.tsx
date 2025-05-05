// components/Modal.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import '@/styles/style.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // 👈 Accept children
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-2 border-blue-600 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent background close
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-blue-600 hover:text-blue-800 transition"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

       

        {/* Body */}
        <div className="text-gray-700 text-base leading-relaxed">
          {/* Default message */}
        

          {/* Custom content */}
          <div className="mt-4 overflow-y-auto scrollbar-custom h-[550px]">
            {children}
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
