'use client'
import { useCart } from "@/context/cartContext";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Import react-hot-toast

interface ClothesProduct {
  addcart_button: string;
  _rev: string;
  _type: string;
  _id: string;
  category: string;
  _updatedAt: string;
  image: string;
  price: number;
  _createdAt: string;
  description: string;
  product_name: string;
  description2: string;
  name: string;
}

export default function Clothes_page() {
  const [products, setProducts] = useState<ClothesProduct[]>([]);
  const { addToCart } = useCart();
  const { id } = useParams();
  const [, setWishlist] = useState<ClothesProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: ClothesProduct[] = await client.fetch(
          `*[_type == 'clothes' && _id == $id]`,
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
  const handleAddToCart = (product: ClothesProduct) => {
    addToCart(product); // Add the product to the cart
    toast.success(`${product.product_name} has been added to your cart!`, { // Display success message
      duration: 3000,
    });
  };

  // Handle add to wishlist and update localStorage
  const handleAddToWishlist = (product: ClothesProduct) => {
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
          <div key={data._id} className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 lg:mt-32 lg:space-x-12 space-y-8 lg:space-y-0 px-4 lg:px-16">
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
              <span className="text-sm sm:text-base lg:text-lg font-light opacity-80">
                {data.description2}
              </span>
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

              {/* Add to Wishlist Button */}
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
