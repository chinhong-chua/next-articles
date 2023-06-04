import React, { useEffect, useRef } from "react";
import { FaSpinner, FaTimes } from "react-icons/fa";

interface OverlayModalProps {
  loading: boolean;
  error: string;
  onClose: () => void;
}

const OverlayModal: React.FC<OverlayModalProps> = ({
  loading,
  error,
  onClose,
}) => {
  //   if (loading) {
  //     return (
  //       <div className="overlay">
  //         <FaSpinner className="spinner" />
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <div className="overlay">
  //         <div className="error">{error}</div>
  //       </div>
  //     );
  //   }

  //   return null;
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  const handleOverlayClose = () => {
    onClose();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      {loading && (
        <div className="text-white text-2xl">
          <FaSpinner className="animate-spin ml-8" />
          Loading...
        </div>
      )}

      {error && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 h-1/3" ref={overlayRef}>
          <div className="flex justify-between items-center mb-2">
            <div className="text-red-500 text-xl font-semibold">Error</div>
            <button onClick={handleOverlayClose} className="text-gray-500">
              <FaTimes />
            </button>
          </div>
          <div className="text-gray-700">{error}</div>
        </div>
      )}
    </div>
  );
};

export default OverlayModal;
