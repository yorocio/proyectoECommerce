import { IProduct } from '@/interfaces/types'
import Link from 'next/link'
import React from 'react'
import Card from '@/componentCard/Card/Card'
import { getProductsByCategoryOrName } from '@/helpers/products.helper'

const Products: React.FC<{ params: { categoryid: string } }> = async ({ params }) => {

    const products = await getProductsByCategoryOrName(params.categoryid)
    return (
        <div className='flex flex-wrap gap-8 p-8 justify-center'>
            {products.length ?
                (products?.map((product: IProduct) => {
                    return (
                        <Link key={product.id} href={`/products/${product.id}`} >
                            <Card  {...product} />
                        </Link>
                    )
                })) : (
                    <div>
                        <h1>PRODUCTO NO ENCONTRADO</h1>
                    </div>
                )
            }

        </div>
    )
}

export default Products