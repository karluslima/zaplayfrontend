'use client'
import Image from "next/image";
import Papa from "papaparse"
import { useState } from "react"
import semFoto from "@/public/100x100.svg"

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  brand: string;
  categories: string;
}

export default function ProducList() {
  const [products, setProducts] = useState<Product[]>([]);

  Papa.parse('/products.csv', {
    header: true,
    download: true,
    complete: function(product) {
      setProducts(product.data as Product[]);;
    }
  });

  return (
      <div className="container m-auto py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"> {products.map((product) => (
          <div className="product p-5 bg-white rounded-md text-black border-[1px]" key={product.id}>
            <div className="product-image flex justify-center my-4">
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}/>
            </div>
            <div className="name text-black min-h-14">
              {product.name}
            </div>
            <div className="price text-cyan-500 font-bold"> {product.price} </div>
            <div className="brand"> {product.brand} </div>
            <div className="categories text-slate-400"> {product.categories} </div>
            </div>
          ))}
        </div>
      </div>
    )
}