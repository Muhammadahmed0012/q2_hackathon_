'use client';
import { useCart } from "@/context/cartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface Categorydata {
  _createdAt: string;
  _updatedAt: string;
  name: string;
  _id: string;
  category: string;
  image: string;
  addcart_button: string;
  price: number;
  _rev: string;
  _type: string;
  description: string;
  product_name: string; // Make sure to use product_name consistently
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Categorydata[]>([]); // Wishlist state
  const { addToCart } = useCart();

  // Load wishlist from localStorage when the page loads
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      const wishlistData = JSON.parse(savedWishlist);
      console.log("Wishlist data: ", wishlistData); // Debugging log to check data
      setWishlist(wishlistData);
    }
  }, []);

  // Handle add to cart and show success message
  const handleAddToCart = (product: Categorydata) => {
    addToCart(product);
    toast.success(`${product.product_name} has been added to your cart!`, { duration: 3000 });
  };

  // Optional: Remove from Wishlist (for better UX)
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Product removed from wishlist", { duration: 3000 });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-12">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mt-8">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product._id} className="flex flex-col items-center">
              <Image
                src={urlFor(product.image).url()}
                alt={product.product_name || "Product"} // Fallback for missing name
                className="w-60 h-60 object-cover"
              />
              <h2>{product.product_name || 'No Name Available'}</h2> {/* Fallback if product name is missing */}
              <span className="text-lg mt-2">₹{product.price}</span>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-black text-white px-6 py-3 text-sm font-medium rounded-lg"
              >
                Add to Cart
              </button>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => handleRemoveFromWishlist(product._id)}
                className="mt-4 bg-red-500 text-white px-6 py-3 text-sm font-medium rounded-lg"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center mt-4 text-lg">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
