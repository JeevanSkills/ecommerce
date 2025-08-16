import { NextRequest, NextResponse } from "next/server";
import { products } from "@/app/product-data";

type Params = {
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
  { params }: { params: Params }
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

type CartBody = {
  productId: string;
};

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const productId = body.productId;

  carts[userId] = carts[userId]
    ? carts[userId].concat([productId])
    : [productId];
  const cartProducts = carts[userId].map((id) =>
    products.find((p) => p.id === id)
  );

  return new Response(JSON.stringify(cartProducts), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const body: CartBody = await request.json();
  const { productId } = body;

  const userCart = carts[userId];

  if (!userCart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  const productIndex = userCart.findIndex((id) => id === productId);

  if (productIndex === -1) {
    return NextResponse.json(
      { error: "Product not found in cart" },
      { status: 404 }
    );
  }

  // Remove the first occurrence of the product from the cart
  userCart.splice(productIndex, 1);

  const updatedCartProducts = userCart.map((id) =>
    products.find((p) => p.id === id)
  );

  return NextResponse.json(updatedCartProducts);
}
