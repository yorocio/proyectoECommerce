import { getProductsDBById } from '@/helpers/products.helper'
import { IProductDetailProps } from '@/interfaces/types'
import ProductDetail from '@/views/ProductDetail/ProductDetail';
import React from 'react'

const Product: React.FC<IProductDetailProps> = async ({ params }) => {
  const productsDetail = await getProductsDBById(params.id);

  return (
    <ProductDetail {...productsDetail}/>
  )
}

export default Product
