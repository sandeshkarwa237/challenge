import React from "react";

const Spinner = ({ isLoading }) => (
  <div class="flex justify-center items-center">
    {isLoading && (
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
        role="status"
      >
        <span class="visually-hidden" />
      </div>
    )}
  </div>
);

export default Spinner;
