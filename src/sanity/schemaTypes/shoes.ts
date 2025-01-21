

export const Shoesdata = {
    name: 'shoes',
    type: 'document',
    title: 'Shoes',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'productheading',
        type: 'string',
        title: 'Product Heading',
      },

      {
        name: 'productname',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'Price of the product in INR',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'Men\'s Shoes', value: 'mens_shoes' },
            { title: 'Women\'s Shoes', value: 'womens_shoes' },
            { title: 'Kids\' Shoes', value: 'kids_shoes' },
            { title: 'Men\'s Apparel', value: 'mens_apparel' },
            { title: 'Women\'s Apparel', value: 'womens_apparel' },
            { title: 'Kids\' Apparel', value: 'kids_apparel' },
          ],
        },
      },
      
 
      {
        name: 'cart_button',
        type: 'string',
        title: 'Cart_Button',
      },
    ],
  };
  