"use client";
import Image from "next/image";
import { useState } from "react";

export default function FindStore() {
  const [query, setQuery] = useState("");
  const [stores] = useState([
    {
      id: 1,
      name: "Nike Store Downtown",
      address: "123 Main Street, New York, NY",
      image: "/image25.jpg",
    },
    {
      id: 2,
      name: "Nike Outlet Mall",
      address: "456 Outlet Road, Orlando, FL",
      image: "/image26.jpg",
    },
    {
      id: 3,
      name: "Nike Flagship Store",
      address: "789 Fashion Ave, Los Angeles, CA",
      image: "/image27.jpeg",
    },
  ]);

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Find a Nike Store</h1>
      <input
        type="text"
        placeholder="Search for a store..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-6 text-lg"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <div
              key={store.id}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white"
            >
              <Image 
                src={store.image}
                alt={store.name}
                className="w-full h-48 object-cover"
                height={200}
                width={200}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                <p className="text-gray-600">{store.address}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg col-span-full">
            No stores found
          </p>
        )}
      </div>
    </div>
  );
}
