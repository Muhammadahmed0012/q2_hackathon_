

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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

export default async function  Category_data() {
 const res:CategoryProduct[] = await client.fetch(`*[_type=='catgeries'][0..2]`)
 console.log(res);
 
  return (
    <div className='grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       
        {
            res.map((data)=>{
                return(
                  <Link href={`/categeries/${data._id}`} key={data._id}>
                  <div className="flex justify-center items-center">
                    <div className="relative w-[450px] h-[450px]">
                      <Image 
                        src={urlFor(data.image).url()} 
                        alt="img" 
                        className="w-full h-full object-cover"
                        height={100}
                        width={100}
                      />
                      <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-3 text-sm font-medium rounded hover:bg-black hover:text-white transition">
                        {data.category}
                      </button>
                    </div>
                  </div>
                </Link>
                
                )
            })
        }
    </div>
  )
}
