import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { callApi } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/Constants";
import ProductDetails from "./ProductDetails";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState();

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callApi("data/search.json").then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] m-auto max-w-[1300px]">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/products/${product.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1">
              <div className="col-span-2 p-4 bg-gray-200">
                <img
                  className="m-auto"
                  src={`${product.image_small}`}
                  alt="Search result product"
                />
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100 ">
                <div className="font-medium text-black p-2">
                  <ProductDetails product={product} ratings={true} />
                  <div className="text-xl xl:text-2xl pt-1">
                    {GB_CURRENCY.format(product.price)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
