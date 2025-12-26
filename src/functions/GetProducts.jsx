import React, { useEffect, useState } from "react";
import { ProductsUrl } from "../api";

function GetProducts() {
  const [products, setProducts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(ProductsUrl);
        const json = await response.json();
        setProducts(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {products.map((products) => (
        <div>
          <h2>{products.title}</h2>
          <img src={products.image} alt={products.alt} />
          <p>{products.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GetProducts;
