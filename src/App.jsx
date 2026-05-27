import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>

      {!showProductList ? (

        <div className="container">

          <h1>🌿 Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery - Your favorite online plant shop.
          </p>

          <button
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>

        </div>

      ) : (

        <ProductList />

      )}

    </div>
  );
}

export default App;
