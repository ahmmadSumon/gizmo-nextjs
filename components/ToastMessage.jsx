import React from 'react';

const ToastMessage = ({ message, isVisible }) => {
  if (!isVisible) return null; // Don't render if not visible

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
      style={{ zIndex: 9999 }}
    >
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;
