import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Food Ordering App</h1>
      <Link href="/menu">Go to Menu 🍕</Link>
    </div>
  );
}