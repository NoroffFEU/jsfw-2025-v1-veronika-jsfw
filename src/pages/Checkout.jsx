import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./Checkout.module.css";
import buttonStyles from "../styles/buttons.module.css";
import cardStyles from "../styles/cards.module.css";
import layoutStyles from "../styles/layout.module.css";

function Checkout() {
  const { cart, total, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className={layoutStyles.page}>
        <p>Your cart is empty</p>
        <Link to="/" className={buttonStyles.primary}>
          Find some products
        </Link>
      </div>
    );
  }

  return (
    <section className={layoutStyles.page}>
      <h1>Checkout</h1>

      <ul className={styles.list}>
        {cart.map((item, index) => (
          <li key={index} className={`${styles.item} ${cardStyles.card}`}>
            <img src={item.image.url} alt={item.image.alt} />
            <div>
              <h2>{item.title}</h2>
              <p>${item.discountedPrice}</p>
            </div>
            <button
              className={styles.remove}
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove product"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>

      <Link to="/checkout-success" className={buttonStyles.primary}>
        Checkout
      </Link>
    </section>
  );
}

export default Checkout;
