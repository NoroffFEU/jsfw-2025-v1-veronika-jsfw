import React from "react";
import { Link } from "react-router-dom";
import layoutStyles from "../styles/layout.module.css";
import buttonStyles from "../styles/buttons.module.css";

function RouteNotFound() {
  return (
    <div className={layoutStyles.page}>
      <h1>Page not found.</h1>
      <p>Unfortunately we can't find the page you are looking for.</p>
      <Link to="/" className={buttonStyles.primary}>
        Go to home page.
      </Link>
    </div>
  );
}

export default RouteNotFound;
