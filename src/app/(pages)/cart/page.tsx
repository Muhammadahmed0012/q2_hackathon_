"use client";

import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.product._id}
                  className="flex flex-wrap md:flex-nowrap items-center justify-between border-b pb-6 mb-6"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <Image
                      src={urlFor(item.product.image).url()}
                      alt={item.product.name}  
                      width={200}
                      height={200}
                      className="rounded-lg border object-cover w-full"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="ml-6 flex-1">
                    <h3 className="font-bold text-xl text-gray-800">
                      {item.product.name} {/* Ensure to use product_name */}
                    </h3>
                    {/* Description is not available */}
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-semibold">Color:</span>{" "}
                      {/* <span className="capitalize">{item.product.selectedColor}</span> */}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-semibold">Quantity:</span> {item.quantity}
                    </p>
                  </div>

                  {/* Price and Actions */}
                  <div className="mt-6 md:mt-0 text-right">
                    <p className="font-semibold text-lg">
                      ₹ {item.product.price * item.quantity}
                    </p>
                    <div className="flex items-center justify-end space-x-4 mt-4">
                      <button
                        onClick={() => decrementQuantity(item.product._id)}
                        className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <button
                        onClick={() => incrementQuantity(item.product._id)}
                        className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="text-sm text-red-500 hover:underline mt-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Summary</h2>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-semibold text-lg">
                  ₹{" "}
                  {cart.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Delivery</p>
                <p className="font-semibold text-lg">Free</p>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-4">
                <p>Total</p>
                <p>
                  ₹{" "}
                  {cart.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              <Link href={"/checkout"}>
                <button className="w-full bg-black text-white font-medium py-4 rounded-lg mt-6 hover:bg-gray-800">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-12">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
