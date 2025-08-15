"use client";
import { useState } from "react";
import { products } from "@/app/product-data";
import Link from "next/link";
export default function CartPage() {
  const [cartIds, setcartIds] = useState(["123", "345"]);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);
  return (
    <>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={'/products/' + product.id}>
          <h2>{product.name}</h2>
          <h2>${product.price}</h2>
        </Link>
      ))}
    </>
  );
}
