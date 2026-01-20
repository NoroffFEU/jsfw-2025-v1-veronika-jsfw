import { Link } from "react-router-dom";
import buttonStyles from "../../styles/buttons.module.css";
import cardStyles from "../../styles/cards.module.css";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { price, discountedPrice } = product;
  const hasDiscount = discountedPrice < price;

  const discountPercent = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <article className={`${styles.card} ${cardStyles.card}`}>
      {hasDiscount && <span className={styles.badge}>-{discountPercent}%</span>}

      <img
        src={product.image.url}
        alt={product.image.alt}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{product.title}</h2>

        <div className={styles.prices}>
          <span className={styles.discounted}>{discountedPrice}</span>

          {hasDiscount && <span className={styles.original}>{price}</span>}
        </div>

        <Link to={`/product/${product.id}`} className={buttonStyles.primary}>
          View product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
