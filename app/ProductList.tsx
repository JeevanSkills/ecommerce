import { Product } from "./product-data";
import Image from "next/image";
import Link from "next/link";
export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} href={'/products/' + product.id}>
            <Image
              src={'/' + product.imageUrl}
              alt='Product image'
              width={150}
              height={150}
            />
          <h2>{product.name}</h2>
          <h2>${product.price}</h2>
        </Link>
      ))}
    </div>
  );
}
