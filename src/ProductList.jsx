import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = {
  "Indoor Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 300,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 2,
      name: "Money Plant",
      price: 250,
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 400,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 280,
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 220,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 6,
      name: "ZZ Plant",
      price: 500,
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    }
  ],

  "Outdoor Plants": [
    {
      id: 7,
      name: "Rose Plant",
      price: 350,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 8,
      name: "Hibiscus",
      price: 280,
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },
    {
      id: 9,
      name: "Jasmine",
      price: 320,
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      id: 10,
      name: "Sunflower",
      price: 450,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 11,
      name: "Bougainvillea",
      price: 500,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 12,
      name: "Marigold",
      price: 200,
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    }
  ],

  "Medicinal Plants": [
    {
      id: 13,
      name: "Tulsi",
      price: 150,
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      id: 14,
      name: "Neem",
      price: 300,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 15,
      name: "Mint",
      price: 180,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 16,
      name: "Ashwagandha",
      price: 450,
      image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
    },
    {
      id: 17,
      name: "Lavender",
      price: 500,
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      id: 18,
      name: "Basil",
      price: 250,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    }
  ]
};

function ProductList() {

  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Paradise Nursery Products</h1>

      {Object.entries(plants).map(([category, items]) => (

        <div key={category}>

          <h2>{category}</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >

            {items.map((plant) => (

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
                  disabled={addedItems.includes(plant.id)}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default ProductList;
