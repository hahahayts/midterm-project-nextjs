import ProductCard from "@/components/ProductCard";
import { ProductsProps } from "@/lib/types";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const products: ProductsProps[] = data.products;

  console.log(products);
  return (
    <div className="grid grid-cols-4 place-items-center gap-3">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
