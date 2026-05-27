import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const calculateTotalAmount = () => {

    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {

    if (item.quantity > 1) {

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (

        <h2>Your cart is empty</h2>

      ) : (

        <div>

          {cartItems.map((item) => (

            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "10px",
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />

              <h2>{item.name}</h2>

              <p>Unit Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  increaseQuantity(item)
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  decreaseQuantity(item)
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
              >
                Remove
              </button>

            </div>

          ))}

          <h2>
            Total Amount: ₹
            {calculateTotalAmount()}
          </h2>

        </div>

      )}

    </div>
  );
}

export default CartItem;
