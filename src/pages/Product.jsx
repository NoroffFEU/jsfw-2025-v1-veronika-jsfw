import React from "react";
import GetSingleProduct from "../functions/GetSingleProduct";
import Reviews from "../components/Reviews";
import styles from "./Product.module.css";

function Product() {
  const product = GetSingleProduct();

  if (!product) return <p className={styles.loading}>Loading product...</p>;

  const { title, description, price, discountedPrice, image, reviews } =
    product;

  const hasDiscount = discountedPrice < price;
  const discountAmount = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          {hasDiscount && (
            <span className={styles.badge}>{discountAmount}% OFF</span>
          )}
          <img src={image.url} alt={image.alt} />
        </div>

        <div className={styles.details}>
          <h1>{title}</h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.pricing}>
            <span className={styles.price}>${discountedPrice}</span>

            {hasDiscount && <span className={styles.oldPrice}>${price}</span>}
          </div>

          <button className={styles.button}>Add to cart</button>
        </div>
      </div>

      <Reviews reviews={reviews} />
    </section>
  );
}

export default Product;
