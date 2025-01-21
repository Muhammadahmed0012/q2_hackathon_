// schemas/product.js

export const categeriesData = {
  name: "catgeries",
  title: "Catgeries",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Men's", value: "Men's" },
          { title: "Women's", value: "Women's" },
          { title: "Kid's", value: "Kid's" },
        ],
      },
    },
    {
      name: "product_name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "addcart_button",
      title: "Addcart",
      type: "string",
    },
  ],
};
