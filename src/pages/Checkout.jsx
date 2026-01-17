import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return <p className={styles.empty}>Your cart is empty</p>;
  }

  return (
    <section className={styles.page}>
      <h1>Checkout</h1>

      <ul className={styles.list}>
        {cart.map((item, index) => (
          <li key={index} className={styles.item}>
            <img src={item.image.url} alt={item.image.alt} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.discountedPrice}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <strong>Total:</strong> ${total.toFixed(2)}
      </div>

      <Link to="/checkout-success" className={styles.button}>
        Checkout
      </Link>
    </section>
  );
}

export default Checkout;
