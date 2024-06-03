// components/CustomAlert.tsx
import React from "react";

interface CustomAlertProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[2000] bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
