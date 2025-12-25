import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div>
      <h1>Purchase completed!</h1>
      <p>
        Your purchase was placed successfully. You will find it at your address
        in less than five days.
      </p>
      <button>
        <Link to="/">Shop more</Link>
      </button>
    </div>
  );
}

export default CheckoutSuccess;
