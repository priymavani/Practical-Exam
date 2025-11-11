const items = {
  1: { name: "Burger", price: 120, desc: "Juicy beef burger with cheese" },
  2: { name: "Pizza", price: 250, desc: "Cheesy pepperoni pizza" },
  3: { name: "Pasta", price: 150, desc: "Creamy Alfredo pasta" },
};

export default function ItemDetails({ params }) {
  const item = items[params.id];

  if (!item) return <p>Item not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.name}</h1>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p>{item.desc}</p>
    </div>
  );
}