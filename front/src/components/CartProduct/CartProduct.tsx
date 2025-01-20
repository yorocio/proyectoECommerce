import { IProduct } from '@/interfaces/types'
import React from 'react'
import ButtonDeleteProduct from '../Button/ButtonDeleteProduct';

interface CartProductProps extends IProduct {
    onDelete: (id: number) => void; // Función para eliminar el producto
}

const CartProduct: React.FC<CartProductProps> = ({ image, name, price, id, onDelete }) => {
    return (
        <div className="md:col-span-2 space-y-4">
            <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-md border border-gray-400 shadow-gray-500">
                <div className="flex gap-4">
                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                        <img src={image} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-base font-bold text-gray-800">{name}</h3>
                        </div>
                    </div>
                </div>

                <div className="ml-auto flex flex-col">
                    <div className="flex items-start gap-4 justify-end">
                        <ButtonDeleteProduct id={id} onDelete={onDelete} />
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mt-auto">{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default CartProduct