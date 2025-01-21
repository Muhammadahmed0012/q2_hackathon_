// schemas/product.js

export const clothesData = {
    name: 'clothes',
    title: 'Clothes',
    type: 'document',
    fields: [
      {
            name: 'image',
            title: 'Image',
            type: 'image',
           
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number',
          },
      {
        name: 'product_name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'description2',
        title: 'Description_2',
        type: 'text',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Running Top', value: 'running-top' },
            { title: 'Versatile Shorts', value: 'versatile-shorts' },
            { title: 'Running Leggings', value: 'running-leggings' },
          ],
        },
      },
     {
        name: 'addcart_button',
        title: 'Addcart',
        type: 'string',
     }
    
    ],

  };
  