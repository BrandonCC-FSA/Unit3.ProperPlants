import { useState } from "react";
import PlantsList from "./plants/PlantsList.jsx";
import Cart from "./Cart/Cart.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === plant.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, count: 1 }];
      }
    });
  }

  function increaseCount(plantId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === plantId ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  function decreaseCount(plantId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  }

  return (
    <>
      <section>
        <h1>Proper Plants</h1>
        <h2>Plants</h2>
        <PlantsList plants={PLANTS} onAddToCart={addToCart} />
      </section>
      <aside>
        <h2>Your Cart</h2>
        <Cart
          cart={cart}
          onIncrease={increaseCount}
          onDecrease={decreaseCount}
        />
      </aside>
    </>
  );
}
