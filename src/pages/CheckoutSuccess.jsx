import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import buttonStyles from "../styles/buttons.module.css";
import layoutStyles from "../styles/layout.module.css";

function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className={`${layoutStyles.narrow} ${layoutStyles.page}`}>
      <h1>Purchase completed!</h1>
      <p>
        Your purchase was placed successfully. You will find it at your address
        in less than five days.
      </p>
      <Link to="/" className={buttonStyles.primary}>
        Shop more
      </Link>
    </section>
  );
}

export default CheckoutSuccess;
