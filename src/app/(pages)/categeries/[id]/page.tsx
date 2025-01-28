'use client'
import { useCart } from "@/context/cartContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Import react-hot-toast

interface Categorydata {
  _createdAt: string; // Creation timestamp
  _updatedAt: string; // Last updated timestamp
  name: string; // Name of the product/category
  _id: string; // Unique identifier for the document
  category: string; // Product category
  image: string; // Image object
  addcart_button: string; // Text for the "Add To Cart" button
  price: number; // Price of the product
  _rev: string; // Revision ID
  _type: string; // Type of the document (e.g., 'categories')
  description: string; // Description of the product/category
  product_name: string; // Product name
}

export default function Category_page() {
  const [products, setProducts] = useState<Categorydata[]>([]);
  const { addToCart } = useCart();
  const [, setWishlist] = useState<Categorydata[]>([]); // Wishlist state
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Categorydata[] = await client.fetch(
          `*[_type == 'catgeries' && _id == $id]`,
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

  // Handle add to cart and show success message
  const handleAddToCart = (product: Categorydata) => {
    addToCart(product); // Add the product to the cart
    toast.success(`${product.product_name} has been added to your cart!`, { // Display success message
      duration: 3000,
    });
  };

  const handleAddToWishlist = (product: Categorydata) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item._id === product._id)) {
        const updatedWishlist = [...prevWishlist, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
        toast.success(`${product.product_name} has been added to your wishlist!`, { duration: 3000 });
        return updatedWishlist;
      } else {
        toast.error(`${product.product_name} is already in your wishlist!`, { duration: 3000 });
        return prevWishlist;
      }
    });
  };
  
  return (
    <div>
      {products.map((data) => {
        return (
          <div
            key={data._id}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 lg:mt-32 lg:space-x-12 space-y-8 lg:space-y-0 px-4 lg:px-16"
          >
            {/* Product Image */}
            <Image
              src={urlFor(data.image).url()}
              alt="Product Image"
              className="w-72 sm:w-[400px] lg:w-[500px] xl:w-[500px] object-cover"
              height={500}
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
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium">
                ₹{data.price}
              </span>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(data)} // Use the function here
                className="h-12 sm:h-14 w-40 sm:w-48 bg-black text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-800"
              >
                {data.addcart_button}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => handleAddToWishlist(data)} // Add to wishlist
                className="h-12 sm:h-14 w-40 sm:w-48 bg-gray-200 text-black text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-400 mt-4"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
