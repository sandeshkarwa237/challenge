import React from "react";
import Badge from "../Badge/badge";

const ProductList = ({
  isSale,
  isExclusive,
  productName,
  productImage,
  productPrice,
}) => (
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <div className="block relative h-48 rounded overflow-hidden border border-gray-300">
      <Badge isSale={isSale} />
      <Badge isExclusive={isExclusive} />
      <img
        alt={productName}
        className="object-cover object-center w-full h-full block"
        src={productImage}
      />
    </div>
    <div className="mt-4">
      <h2 className="text-gray-900 title-font text-lg font-medium">
        {productName}
      </h2>
      <p className="mt-1">{productPrice}</p>
    </div>
  </div>
);

export default ProductList;
