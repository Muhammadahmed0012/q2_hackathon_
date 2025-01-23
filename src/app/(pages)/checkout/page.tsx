"use client";

import { useState } from "react";
import { useCart } from "@/context/cartContext";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "card",
  });
  const [loading, setLoading] = useState(false);
  interface OrderDetails {
    orderId: string;
    customer: {
      name: string;
      email: string;
      address: string;
    };
    items: {
      product: {
        _id: string;
        name: string;
        price: number;
        image: string;
      };
      quantity: number;
    }[];
    totalAmount: number;
  }

  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      setLoading(true);

      // Simulate order processing and shipping API call
      const mockOrderID = `ORD-${Math.floor(Math.random() * 1000000)}`;
      const orderData = {
        orderId: mockOrderID,
        customer: { ...formData },
        items: cart,
        totalAmount: cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
      };

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

      setOrderDetails(orderData);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Failed to complete the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Details Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-medium text-gray-700">
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your shipping address"
                />
              </div>
              <div>
                <label htmlFor="paymentMethod" className="block font-medium text-gray-700">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product._id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <p className="text-gray-700 font-medium">{item.product.name}</p>
                  </div>
                  <p className="text-gray-700 font-medium">
                    ₹ {item.product.price * item.quantity}
                  </p>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <p>Total</p>
                <p>₹ {totalAmount}</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full mt-6 py-3 rounded-lg text-white font-medium ${
                loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>

     {/* Order Confirmation Details */}
{/* Order Confirmation Details */}
{orderDetails && (
  <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
    <h2 className="text-2xl font-semibold mb-6">Order Confirmation</h2>
    <p className="mb-4 text-gray-700">Thank you for your order!</p>
    <p className="mb-4 text-gray-700">
      Order ID: <strong>{orderDetails.orderId}</strong>
    </p>
    <p className="mb-4 text-gray-700">Name: {orderDetails.customer.name}</p>
    <p className="mb-4 text-gray-700">Email: {orderDetails.customer.email}</p>
    <p className="mb-4 text-gray-700">Shipping Address: {orderDetails.customer.address}</p>
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Ordered Products:</h3>
      {orderDetails.items.map((item) => (
        <div key={item.product._id} className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <p className="text-gray-700 font-medium">{item.product.name}</p>
          </div>
          <p className="text-gray-700 font-medium">₹ {item.product.price * item.quantity}</p>
        </div>
      ))}
      <div className="flex justify-between font-semibold text-lg border-t pt-4">
        <p>Total</p>
        <p>₹ {orderDetails.totalAmount}</p>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default CheckoutPage;
