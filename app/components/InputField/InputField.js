import React from "react";

const InputField = ({ type, name, label, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
