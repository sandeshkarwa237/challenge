import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductList from "../common-components/ProductList/productList";
import CategoryType from "../CategoryType/categoryType";
import { fetchLandingProducts, updateFilter } from "../Redux/Landing/action";

const Landing = ({
  fetchProductList,
  productLists,
  updateFilter,
  filteredProductLists,
}) => {
  const productDetails =
    filteredProductLists.length > 0 ? filteredProductLists : productLists;

  useEffect(() => {
    // Fetching product list on page load
    fetchProductList();
  }, [fetchProductList]);

  const getFilterValue = (event) => {
    updateFilter(event.target.value);
  };

  return (
    <>
      <CategoryType
        getFilterValue={getFilterValue}
        categoryText="Women's Tops"
      />
      <section>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productDetails.map((productList) => {
              const {
                index,
                isSale,
                isExclusive,
                productImage,
                productName,
                price,
              } = productList;
              return (
                <ProductList
                  key={index}
                  isSale={isSale}
                  isExclusive={isExclusive}
                  productImage={productImage}
                  productName={productName}
                  productPrice={price}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductList: () => fetchLandingProducts(dispatch),
  updateFilter: (filterValue) => updateFilter(dispatch, filterValue),
});

const mapStateToProps = (state) => ({
  productLists: state.landing.productLists,
  filteredProductLists: state.landing.filteredProductLists,
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
