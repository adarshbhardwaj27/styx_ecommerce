import React from "react";
import data from "../../ProdData/data.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <div className="prodList">
        {data.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
