import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'


interface Categorydata {
    _createdAt: string; // Creation timestamp
    _updatedAt: string; // Last updated timestamp
    product_name: string; // Name of the product/category
    _id: string; // Unique identifier for the document
    category: string; // Product category
    image: string; // Image object
    addcart_button: string; // Text for the "Add To Cart" button
    price: number; // Price of the product
    _rev: string; // Revision ID
    _type: string; // Type of the document (e.g., 'categories')
    description: string; // Description of the product/category
  }

export default async function Category_page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
   const { id } = await params;
//    console.log(id);
   
 const res:Categorydata[] = await  client.fetch(`*[_type=='catgeries' && _id==$id]`,{id:id})
 console.log(res);
 
  return (
    <div>
        {
        res.map((data)=>{
            return(
              <div key={data._id} className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center mt-16 lg:mt-32 lg:space-x-12 space-y-8 lg:space-y-0 px-4 lg:px-16">
              {/* Product Image */}
              <Image
                src={urlFor(data.image).url()}
                alt="Product Image"
                className="w-72 sm:w-[400px] lg:w-[500px] xl:w-[500px] object-cover"
                height={500}
                width={700}
              />
            
              {/* Product Content */}
              <div className="flex flex-col space-y-6 lg:w-[35rem] text-center lg:text-left">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                  {data.product_name}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg font-light opacity-80">
                  {data.description}
                </p>
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium">
                  ₹{data.price}
                </span>
                <button className="h-12 sm:h-14 w-40 sm:w-48 bg-black text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-800">
                  {data.addcart_button}
                </button>
              </div>
            </div>
            
            )
        })

        }</div>
  )
}
