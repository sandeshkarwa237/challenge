import React from "react";

const Dropdown = ({ options, getSelectedValue }) => (
  <>
    <select
      onChange={getSelectedValue}
      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
    >
      {options.map((option) => {
        return (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </span>
  </>
);

export default Dropdown;
