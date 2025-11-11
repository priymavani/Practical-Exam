import Link from "next/link";

const items = [
  { id: 1, name: "Burger" },
  { id: 2, name: "Pizza" },
  { id: 3, name: "Pasta" },
];

export default function MenuPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍔 Menu</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/menu/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}