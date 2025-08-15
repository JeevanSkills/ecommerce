import { NextRequest } from "next/server";
import { products } from "@/app/product-data";

type params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: params }
) {
  const productId = params.id;
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
