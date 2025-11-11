let orders = [
  { id: 1, item: "Burger", quantity: 2, status: "Pending" },
  { id: 2, item: "Pizza", quantity: 1, status: "Delivered" },
];

// ✅ GET → List all orders
export async function GET() {
  return Response.json(orders);
}

// ✅ POST → Create new order
export async function POST(req) {
  const newOrder = await req.json();
  newOrder.id = orders.length + 1;
  newOrder.status = "Pending";
  orders.push(newOrder);
  return Response.json({ message: "Order created", order: newOrder });
}