export default function PlantsList({ plants, onAddToCart }) {
  return (
    <ul className="individual-plant">
      {plants.map((plant) => (
        <li key={plant.id}>
          <p className="plant-image">{plant.image}</p>
          <h2>{plant.name}</h2>
          <button onClick={() => onAddToCart(plant)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
}
