import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
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
}

export default async function Clothes_data() {
  const res: ClothesProduct[] = await client.fetch(`*[_type=='clothes']`);

  console.log(res);

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center space-x- space-y-12 place-content-center items-center">
      {res.map((data) => {
        return (
          <Link href={`/clothes-data/${data._id}`} key={data._id}>
            <div className="group relative bg-white shadow-md rounded-lg p-4">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Product Image"
                  height={420}
                  width={420}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
                  <h2 className="text-[16px] font-semibold">
                    {data.product_name}
                  </h2>
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
