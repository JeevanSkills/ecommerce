import NotFoundPage from "@/app/not-found";
import { products } from "@/app/product-data";
import Button from "@mui/material/Button";
export default function ProductsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((product) => product.id === params.id);

  if (!product) {
    return <NotFoundPage />;
  }

  // TODO: Add a not-found handler for when a product is not found
  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div  className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <img
          src={"/" + product.imageUrl}
          alt="Product image"
           className="w-full h-auto rounded-lg shadow-md" 
          width={150}
          height={150}
        />
      </div>
    <div  className="md:w-1/2">
      <h1  className="text-4xl font-bold mb-4">{product!.name}</h1>
      <p  className="text-2xl text-gray-600 mb-6">${product!.price}</p>
      <h3  className="text-2xl font-semibold mb-2">Description</h3>
      <p className="text-gray-700">{product!.description}</p>
      <div className="mt-4">
        <Button variant="contained">Add to Cart</Button>
      </div>
    </div>
    </div>

  );
}
