'use client'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


interface CategoryProduct {
  _createdAt: string;
  _updatedAt: string;
  product_name: string;
  _id: string;
  category: string;
  image: string;
  addcart_button: string;
  price: number;
  _rev: string;
  _type: string;
  description: string;
}

export default function Category_data() {
  // State to store the fetched data
  const [products, setProducts] = useState<CategoryProduct[]>([]);


  // Fetch the data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const res: CategoryProduct[] = await client.fetch(`*[_type=='catgeries'][0..2]`);
      setProducts(res);
    };
    fetchData();
  }, []);


  return (
    <div className='grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {products.map((data) => {
        return (
          <Link href={`/categeries/${data._id}`} key={data._id}>
            <div className="flex justify-center items-center relative">
              <div className="relative w-[450px] h-[450px]">
                <Image
                  src={urlFor(data.image).url()}
                  alt="Product Image"
                  className="w-full h-full object-cover"
                  height={100}
                  width={100}
                />
                
                {/* Wishlist Icon */}
             

                {/* Category Button */}
                <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-3 text-sm font-medium rounded hover:bg-black hover:text-white transition">
                  {data.category}
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
