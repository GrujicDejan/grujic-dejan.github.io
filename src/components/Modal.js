import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Modal({ isVisible, content, onClose }) {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className="bg-white p-8 rounded-md shadow-md z-10 w-96 flex items-center">
            <FaCheckCircle className="text-green-500 mr-4" size={24} />
            <div>
              <p className="text-lg font-semibold mb-4">{content}</p>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
