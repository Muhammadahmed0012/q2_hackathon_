import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Shoe {
  product_name: string; // Name of the shoe product
  price: number; // Price of the product in INR
  _rev: string; // Revision ID (auto-generated)
  _type: string; // Document type (e.g., 'shoes')
  _createdAt: string; // Creation timestamp (ISO format)
  _id: string; // Unique product ID
  category: "mens_shoes" | "womens_shoes" | "kids_shoes"; // Category options
  image: string;
  // Optional product image field
}

export default async function Shoes_data() {
  const res: Shoe[] = await client.fetch(`*[_type=='shoes'][0..2]`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center space-x-8 space-y-8">
      {res.map((data) => {
        return (
          <Link href={`/shoes-data/${data._id}`} key={data._id}>
            <div className="group relative bg-white shadow-md rounded-lg p-4">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-full w-full">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Product Image"
                  height={420}
                  width={420}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
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
              <div className="mt-4 text-center">
                <div className="flex justify-between items-center space-x-10">
                  <h2 className="text-lg font-semibold">{data.product_name}</h2>
                  <span className="text-lg font-medium">₹{data.price}</span>
                </div>
                <span className="text-sm text-gray-500">{data.category}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
