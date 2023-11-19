import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function Notification({ content, isSuccess, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [content, onClose]); // Dodaj onClose u zavisnosti useEffect-a

  return (
    <>
      {isVisible && content && (
        <div className={`fixed rounded top-20 right-5 ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white p-4 text-center`}>
          {isSuccess ? (
            <FaCheckCircle className="inline-block mr-2" size={18} />
          ) : (
            <FaExclamationCircle className="inline-block mr-2" size={18} />
          )}
          {content}
        </div>
      )}
    </>
  );
}
