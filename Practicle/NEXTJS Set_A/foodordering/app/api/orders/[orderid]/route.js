let orders = [
  { id: 1, item: "Burger", quantity: 2, status: "Pending" },
  { id: 2, item: "Pizza", quantity: 1, status: "Delivered" },
];

// ✅ GET → Get order by ID
export async function GET(req, { params }) {
  const order = orders.find((o) => o.id == params.orderid);
  if (!order) return Response.json({ error: "Order not found" }, { status: 404 });
  return Response.json(order);
}

// ✅ PATCH → Update order status or quantity
export async function PATCH(req, { params }) {
  const updateData = await req.json();
  const index = orders.findIndex((o) => o.id == params.orderid);

  if (index === -1)
    return Response.json({ error: "Order not found" }, { status: 404 });

  orders[index] = { ...orders[index], ...updateData };
  return Response.json({ message: "Order updated", order: orders[index] });
}