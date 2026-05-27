import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  {
    id: 2,
    name: "Snake Plant",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },

  {
    id: 3,
    name: "Money Plant",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Plant Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <img
              src={plant.image}
              alt={plant.name}
              width="100%"
              height="200"
            />

            <h3>{plant.name}</h3>

            <p>₹{plant.price}</p>

            <button
              onClick={() => dispatch(addItem(plant))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
