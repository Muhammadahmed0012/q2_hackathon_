import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Product {
  mRP: string;
  _id: string;
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

export default async function All_Products() {
  const res: Product[] = await client.fetch(`*[_type=='nike_all_products']`);
  console.log(res);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-14 mb-14">
      {res.map((data) => {
        return (
          <Link href={`/all-products/${data._id}`} key={data._id}>
            <div className="group relative bg-white shadow-md rounded-lg p-4">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Product Image"
                  height={420}
                  width={420}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Wishlist Icon */}
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 3.75a4.5 4.5 0 013.482 7.44l-7.982 8.601a.75.75 0 01-1.048 0l-7.982-8.6a4.5 4.5 0 016.482-6.245 4.5 4.5 0 016.048 0z"
                      />
                    </svg>
                  </button>
                  {/* Add to Cart Button */}
                  <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 ">
                <span className="block text-sm text-[orangered]">
                  {data.justIn}
                </span>
                <h2 className="text-lg font-semibold">{data.productName}</h2>
                <span className="block text-sm text-gray-500">
                  {data.category}
                </span>
                <span className="block text-sm text-gray-500">
                  {data.option}
                </span>
                <span className="text-sm text-gray-500 flex ">
                  Color:{data.color}
                </span>
                <div className="flex space-x-4 items-center mt-2">
                  <span className="text-sm text-gray-500">{data.mRP}</span>
                  <span className="text-lg font-medium">₹{data.price}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
