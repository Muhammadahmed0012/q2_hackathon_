"use client";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "New & Featured", href: "/all-products" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
    { name: "Sales", href: "/sales" },
    { name: "SNKRS", href: "/snkrs" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-black italic text-2xl ${isOpen ? "rotate-45" : ""}`}>
          Nike
        </span>
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute top-14 right-0 bg-gray-800 text-white rounded-lg shadow-lg p-5">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
