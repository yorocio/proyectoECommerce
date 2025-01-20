'use client'
import { IProduct, IUserSession } from '@/interfaces/types'
import React from 'react'
import Swal from 'sweetalert2'

interface ButtonProps {
    children: React.ReactNode
    userData: IUserSession
    product: IProduct
}

const Button: React.FC<ButtonProps> = ({ children, userData, product }) => {

    const handleClick = () => {
        if (!userData.token) {
            Swal.fire({
                icon: "info",
                title: 'Debes estar logueado para agregar productos',
                width: 400,
                padding: "3em"
            })
        } else {
            const carrito: IProduct[] = JSON.parse(localStorage.getItem('carrito') || "[]") 

            const productExist = carrito.some((item: IProduct) => {
                if (item.id === product.id) return true;
                return false;
            })

            if (productExist) {
                Swal.fire({
                    icon: "warning",
                    title: 'Este producto ya existe en tu orden',
                    width: 400,
                    padding: "3em"
                })
            } else {
            carrito.push(product)

            localStorage.setItem("carrito", JSON.stringify(carrito)) //AGREGA PRODUCTO AL CARRITO

            Swal.fire({
                icon: "success",
                title: 'Producto agregado al carrito',
                width: 400,
                padding: "3em"
            })
        }
    }
}


return (
    <div>< button onClick={handleClick} type='submit' className='mt-4 rounded-md py-2 px-6 border border-gray-400 shadow-sm  hover:text-slate-400  bg-slate-800 text-white'>{children}</button>
    </div>
)
}

export default Button