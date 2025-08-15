import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type params = {
  id: string;
};

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["123", "234"],
  "2": ["345", "456"],
  "3": ["234"],
};

export async function GET(
  request: NextRequest,
  { params }: { params: params }
) {
  const userId = params.id;
  const productIds = carts[userId];
  if (!productIds || productIds === undefined) {
    return new Response(JSON.stringify({ error: "Cart not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
  const cartProducts = productIds.map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
