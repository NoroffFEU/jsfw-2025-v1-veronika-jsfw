import { useEffect, useState } from "react";
import { ProductsUrl } from "../api";
import ProductCard from "../components/ProductCard";

console.log("ProductsUrl:", ProductsUrl);

function GetProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        const response = await fetch(ProductsUrl);
        const json = await response.json();
        console.log("API response:", json);

        setProducts(json.data);
      } catch (error) {
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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default GetProducts;
