import React from "react";
import GetProducts from "../functions/GetProducts";

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
      </div>
      <div>
        <GetProducts />
      </div>
    </div>
  );
}

export default Home;
