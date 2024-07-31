import React, { useState } from "react";
import data from "../../ProdData/data.json";
import Product from "./Product";

const ProductList = () => {
  // State to manage search input
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter products based on search query
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for Products here"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="prodList">
        {filteredProducts.length === 0 ? (
          <h1>No results</h1>
        ) : (
          filteredProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
