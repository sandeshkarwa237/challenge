import React from "react";
import Dropdown from "../common-components/Dropdown/dropdown";
import { filterProductContent } from "../static-content/filterProductContent";

const CategoryType = ({ getFilterValue, categoryText }) => (
  <div className="container flow-root mx-auto p-5 md:flex-row">
    <div className="float-left title-font font-medium text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">{categoryText}</span>
    </div>
    <div className="float-right ml-6 inline-flex content-end">
      <div className="relative">
        <span className="mr-3">Filter by: </span>
        <Dropdown
          options={filterProductContent}
          getSelectedValue={getFilterValue}
        />
      </div>
    </div>
  </div>
);

export default CategoryType;
