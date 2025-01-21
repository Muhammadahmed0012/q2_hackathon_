'use client'
import { useCart } from "@/context/cartContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  mRP: string;
  _id: string;
  name: string;
  option: string;
  color: string;
  description: string;
  justIn: string;
  productName: string;
  image: string;
  price: number;
  addToCart: string;
  category: string;
}

export default function Products_data() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Access addToCart function

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(`*[_type == 'nike_all_products']`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((data) => (
        <div key={data._id} className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 lg:mt-32 lg:space-x-12 space-y-8 lg:space-y-0 px-4 lg:px-16 mb-16">
          {/* Product Image */}
          <Image
            src={urlFor(data.image).url()}
            alt="Product Image"
            className="w-72 sm:w-[400px] lg:w-[500px] xl:w-[500px] object-cover"
            height={700}
            width={700}
          />

          {/* Product Content */}
          <div className="flex flex-col space-y-6 lg:w-[35rem] text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
              {data.productName}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-light opacity-80">
              {data.description}
            </p>

            {/* Color Selection */}
            <div className="flex flex-wrap gap-4">
              <span className="text-lg font-medium">Choose Color:</span>
              {["W", "G", "Y", "B", "P"].map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    className="h-5 w-5 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">{color}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center">
              <span className="text-xl font-medium">{data.mRP}</span>
              <span className="text-2xl font-medium">{data.price}</span>
            </div>

            <button onClick={() => addToCart(data)} className="h-12 sm:h-14 w-40 sm:w-48 bg-black text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-800">
              {data.addToCart}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
