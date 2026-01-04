import React from "react";
import GetProducts from "../functions/GetProducts";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Products</h1>
      <GetProducts />
    </div>
  );
}

export default Home;
