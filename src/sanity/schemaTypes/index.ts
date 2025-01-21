import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { Shoesdata } from './shoes'
import { clothesData } from './clothes'
import { categeriesData } from './categeries'
import { allProductData } from './all-products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,Shoesdata,clothesData,categeriesData,allProductData],
}
