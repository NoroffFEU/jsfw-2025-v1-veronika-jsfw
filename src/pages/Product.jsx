import React from "react";
import GetSingleProduct from "../functions/GetSingleProduct";
import Reviews from "../components/Reviews";

function Product() {
  const product = GetSingleProduct();

  if (!product) return <p>Loading product...</p>;

  const { title, description, price, discountedPrice, image, reviews } =
    product;

  const hasDiscount = discountedPrice < price;
  const discountAmount = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <div>
      <h1>{title}</h1>

      <img src={image.url} alt={image.alt} width={300} />

      <p>{description}</p>

      <p>
        Price: <strong>{discountedPrice}</strong>
      </p>

      {hasDiscount && (
        <p>
          <span style={{ textDecoration: "line-through" }}>{price}</span> (
          {discountAmount}% off)
        </p>
      )}

      <button>Add to cart</button>

      <Reviews reviews={reviews} />
    </div>
  );
}

export default Product;
