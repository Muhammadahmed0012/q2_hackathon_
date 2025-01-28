export const allProductData = {
    name: "nike_all_products",
    title: "Nike All Products",
    type: "document",
    fields: [
      {
        "name": "image",
        "title": "Image",
        "type": "image",
        "options": {
          "hotspot": true
        }
      },
      {
        "name": "justIn",
        "title": "Just In",
        "type": "string"
      },
      {
        "name": "product_name",
        "title": "Product Name",
        "type": "string"
      },
      {
        "name": "category",
        "title": "Category",
        "type": "string",
        "options": {
          "list": ["mens_shoes", "womens_shoes", "kids_shoes"]
        }
      },
      {
        "name": "option",
        "title": "Options",
        "type": "string"
      },
      {
        "name": "color",
        "title": "Color",
        "type": "string",
        "options": {
          "list": ["Black", "White", "Red", "Blue", "Gray", "Green", "Yellow"]
        }
      },
      {
        "name": "mRP",
        "title": "M-R-P",
        "type": "string"
      },
      {
        "name": "price",
        "title": "Price",
        "type": "number"
      },
      {
        "name": "description",
        "title": "Description",
        "type": "text"
      },
      {
        "name": "addToCart",
        "title": "Add To Cart",
        "type": "string"
      }
    ]
  }
  