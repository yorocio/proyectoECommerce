import Button from '@/components/Button/Button'
import { IProduct } from '@/interfaces/types'
import { cookies } from 'next/headers'
import React from 'react'

const ProductDetail: React.FC<IProduct> = (props) => {

    const {name, image, description, price, stock } = props;

    const cookieStore = cookies();
    const userData = JSON.parse(cookieStore.get('userData')?.value ?? '{}')

    return (
        <div className='p-8 flex flex-col items-center'>
            <img src={image} alt='imagen del producto' />
            <h1 className="font-semibold p-2 text-xl text-center">Nombre del producto: {name}</h1>
            <p className='p-2 max-w-3xl text-justify text-gray-900'>{description} </p>
            <p className='p-2 text-lg font-bold'>Precio: ${price}</p>
            <p className='p-2 text-gray-800'>Stock: {stock} </p>
            <div className='flex justify-center'>
                <Button userData={userData} product ={props}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ProductDetail
