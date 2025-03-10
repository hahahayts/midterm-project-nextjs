import { ProductsProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: ProductsProps }) => {
  return (
    <div className="shadow-lg py-6 px-4 rounded-lg">
      <h1 className="capitalize text-center text-lg font-bold mb-2">
        {product.title}
      </h1>
      <p className="line-clamp-2 text-sm mb-2">{product.description}</p>
      <div className="flex justify-center">
        <Image
          src={product.images[0]}
          alt=""
          width={200}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="flex justify-between text-sm capitalize">
        <p>{product.brand}</p>
        <p>{product.category}</p>
      </div>

      <p className="text-center mt-9 cursor-pointer link">${product.price}</p>
    </div>
  );
};

export default ProductCard;
