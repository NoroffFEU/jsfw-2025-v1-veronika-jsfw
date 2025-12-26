import { useEffect, useState } from "react";
import { ProductsUrl } from "../api";

console.log("ProductsUrl:", ProductsUrl);

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
        const response = await fetch(ProductsUrl);
        const json = await response.json();
        console.log("API response:", json);

        setProducts(json.data);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
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

  if (!products.length) return <p>No products found</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image.url} alt={product.image.alt} width={200} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GetProducts;
