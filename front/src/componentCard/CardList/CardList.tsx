import React from 'react'
import Card from '../Card/Card';
import Link from 'next/link';
import { getProductsDB } from '@/helpers/products.helper';

const CardList = async () => {
    
    const products = await getProductsDB();
    return (
        <div className='flex flex-wrap gap-8 p-8 justify-center'>
            {products &&
                products?.map((product) => {
                    return (
                        <Link key={product.id} href={`/product/${product.id}`} >
                            <Card  {...product} />
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default CardList
