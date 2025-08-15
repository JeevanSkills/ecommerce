import { products } from "../product-data";
import ProductList from "../ProductList";

export default function ProductsPage() {
  return (
    <>
      <h1>products</h1>
      <ProductList products={products} />
    </>
  );
}
