"use client";

import { useCart } from "@/context/cartContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";

interface Product {
  mRP: string;
  _id: string;
  name: string;
  option: string;
  color: string;
  description: string;
  justIn: string;
  product_name: string; // Ensure product_name is used consistently here
  image: string;
  price: number;
  addToCart: string;
  category: string;
}

export default function ProductsData() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { id } = useParams();
  const [, setWishlist] = useState<Product[]>([]);

  // Fetch products based on the category id
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == 'nike_all_products' && _id == $id]`,
          { id }
        );
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.product_name} has been added to the cart!`);
  };

  // Add product to wishlist and update localStorage
  const handleAddToWishlist = (product: Product) => {
    console.log("Adding to wishlist: ", product); // Log the product object
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item._id === product._id)) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
        toast.success(`${product.product_name} has been added to the wishlist!`);
        return updatedWishlist;
      } else {
        toast.error(`${product.product_name} is already in your wishlist!`);
        return prevWishlist;
      }
    });
  };

  return (
    <div>
      {products.length > 0 ? (
        products.map((data) => (
          <div
            key={data._id}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 lg:mt-32 lg:space-x-12 space-y-8 lg:space-y-0 px-4 lg:px-16 mb-16"
          >
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
                {data.product_name}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-light opacity-80">
                {data.description}
              </p>

              {/* Price Section */}
              <div className="flex items-center">
                <span className="text-xl font-medium">{data.mRP}</span>
                <span className="text-2xl font-medium">{data.price}</span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(data)}
                className="h-12 sm:h-14 w-40 sm:w-48 bg-black text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-800"
              >
                {data.addToCart}
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => handleAddToWishlist(data)}
                className="h-12 sm:h-14 w-40 sm:w-48 bg-gray-200 text-black text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-400 mt-4"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
