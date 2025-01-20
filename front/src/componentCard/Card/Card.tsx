import { IProduct } from '@/interfaces/types'
import React from 'react'

const Card: React.FC<IProduct> = ({ image, name, price }) => {
    return (
       <div className="max-w-screen-md bg-white border border-gray-400 shadow-gray-500 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-8">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img className="object-cover h-full w-full" src={image} alt={`${name} imagen del producto`} />
            </div>
            <div className='p-5 text-center'>
                <h1 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 p-3">{name}</h1>
                <p className='text-gray-700 dark:text-gray-300'>Precio: ${price}</p>
            </div>
        </div>
    )
}

export default Card;

