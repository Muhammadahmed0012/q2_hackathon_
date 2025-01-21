// import { useState } from "react";

// export default function Wishlist() {
//     const [wishlist, setWishlist] = useState([
//       {
//         id: 1,
//         name: "Nike Air Max 270",
//         image: "/air-max-270.jpg",
//         price: "$150",
//       },
//       {
//         id: 2,
//         name: "Nike React Infinity Run",
//         image: "/react-infinity-run.jpg",
//         price: "$160",
//       },
//       {
//         id: 3,
//         name: "Nike Dunk Low",
//         image: "/dunk-low.jpg",
//         price: "$120",
//       },
//     ]);
  
//     const removeItem = (id:any) => {
//       setWishlist(wishlist.filter((item) => item.id !== id));
//     };
  
//     return (
//       <div className="container">
//         <h1>Nike Wishlist</h1>
//         <div className="wishlist-grid">
//           {wishlist.map((item) => (
//             <div key={item.id} className="wishlist-item">
//               <img src={item.image} alt={item.name} />
//               <h2>{item.name}</h2>
//               <p>{item.price}</p>
//               <button onClick={() => removeItem(item.id)}>Remove</button>
//             </div>
//           ))}
//         </div>
  
//         <style jsx>{`
//           .container {
//             padding: 20px;
//             max-width: 1200px;
//             margin: auto;
//           }
//           h1 {
//             text-align: center;
//             margin-bottom: 20px;
//           }
//           .wishlist-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 20px;
//           }
//           .wishlist-item {
//             border: 1px solid #ddd;
//             border-radius: 10px;
//             padding: 20px;
//             text-align: center;
//             background: #f9f9f9;
//           }
//           .wishlist-item img {
//             max-width: 100%;
//             border-radius: 10px;
//           }
//           button {
//             background: #ff4d4d;
//             color: white;
//             border: none;
//             padding: 10px 15px;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//           button:hover {
//             background: #ff1a1a;
//           }
//         `}</style>
//       </div>
//     );
//   }
  
  
"use client"
import Image from "next/image";
import { useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      image: "/image23.png",
      price: "$150",
    },
    {
      id: 2,
      name: "Nike React Infinity Run",
      image: "/image24.png",
      price: "$160",
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      image: "/images22.png",
      price: "$120",
    },
  ]);

  interface WishlistItem {
    id: number;
    name: string;
    image: string;
    price: string;
  }

  const removeItem = (id: number) => {
    setWishlist((prev: WishlistItem[]) => prev.filter((item: WishlistItem) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Nike Wishlist</h1>
      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              objectFit="cover"
            />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
        {wishlist.length === 0 && <p>Your wishlist is empty!</p>}
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .wishlist-item {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          background: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        button {
          background: #ff4d4d;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:hover {
          background: #ff1a1a;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
          }
          .wishlist-item {
            padding: 15px;
          }
          button {
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
}
