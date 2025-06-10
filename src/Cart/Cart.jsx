export default function Cart({ cart, onIncrease, onDecrease }) {
  return (
    <ul className="cart">
      {cart.map((individualPlant) => (
        <li key={individualPlant.id}>
          {individualPlant.name} {individualPlant.image} (x
          {individualPlant.count})
          <button onClick={() => onIncrease(individualPlant.id)}>+</button>
          <button onClick={() => onDecrease(individualPlant.id)}>-</button>
        </li>
      ))}
    </ul>
  );
}
