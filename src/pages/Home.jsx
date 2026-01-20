import React from "react";
import GetProducts from "../functions/GetProducts";
import layoutStyles from "../styles/layout.module.css";

function Home() {
  return (
    <div className={layoutStyles.page}>
      <h1>Products</h1>
      <GetProducts />
    </div>
  );
}

export default Home;
