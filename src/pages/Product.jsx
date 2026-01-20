import React from "react";
import GetSingleProduct from "../functions/GetSingleProduct";
import Reviews from "../components/Reviews";
import styles from "./Product.module.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import buttonStyles from "../styles/buttons.module.css";
import cardStyles from "../styles/cards.module.css";

function Product() {
  const product = GetSingleProduct();
  const { addToCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);

  if (!product) return <p className={styles.loading}>Loading product...</p>;

  const { title, description, price, discountedPrice, image, reviews } =
    product;

  const hasDiscount = discountedPrice < price;
  const discountAmount = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  function handleAddToCart() {
    addToCart(product);
    setShowConfirm(true);
  }

  return (
    <section className={styles.page}>
      <div className={`${cardStyles.card} ${styles.card}`}>
        <div className={styles.imageWrapper}>
          {hasDiscount && (
            <span className={styles.badge}>-{discountAmount}%</span>
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

          <button className={buttonStyles.primary} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className={styles.confirm}>
          <p>Product added to cart!</p>
          <div>
            <Link to="/checkout">Go to checkout</Link>
            <button onClick={() => setShowConfirm(false)}>
              <Link to="/">Continue shopping </Link>
            </button>
          </div>
        </div>
      )}

      <Reviews reviews={reviews} />
    </section>
  );
}

export default Product;
