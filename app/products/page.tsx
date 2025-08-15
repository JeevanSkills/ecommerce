import ProductList from '../ProductList';
import { products } from '../product-data';

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <ProductList products={products} />
    </main>
  );
}