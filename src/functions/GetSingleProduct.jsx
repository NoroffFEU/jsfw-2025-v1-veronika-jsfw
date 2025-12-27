import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProductUrl } from "../api";

function GetSingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(SingleProductUrl(id));

      const json = await response.json();
      setProduct(json.data);
    }

    fetchProduct();
  }, [id]);

  return product;
}

export default GetSingleProduct;
