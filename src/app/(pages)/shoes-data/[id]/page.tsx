import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Product {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  productname: string;
  productheading: string;
  description: string;
  price: number;
  category: "mens_shoes" | "womens_shoes" | "kids_shoes";
  cart_button: string;
  sku: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export default async function Shoes_page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const query: Product[] = await client.fetch(
    `*[_type=="shoes" && _id==$data] `,
    { data: id }
  );
  console.log(query);

  return (
    <div>
      {query.map((data) => {
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
                {data.productheading}
              </h2>
              <span className="text-sm sm:text-base lg:text-lg font-light opacity-80">
                {data.description}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium">
                ₹{data.price}
              </span>
              <button className="h-12 sm:h-14 w-40 sm:w-48 bg-black text-white text-sm sm:text-lg font-medium rounded-lg hover:bg-gray-800">
                {data.cart_button}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
