'use client'
import CartProduct from '@/components/CartProduct/CartProduct';
import { createOrder } from '@/helpers/orders.helper';
import { IProduct, IUserSession } from '@/interfaces/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const CarritoView: React.FC<{ userData: IUserSession }> = ({ userData }) => {
  const router = useRouter();

  const [carrito, setCarrito] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito') || "[]")
    if (storedCarrito) {
      let totalcarrito = 0;
      storedCarrito?.map((item: IProduct) => {
        totalcarrito = totalcarrito + item.price
      })
      setTotal(totalcarrito)
      setCarrito(storedCarrito)
    }
  }, [])

  const handleCheckOut = async () => {
    const idProducts = carrito?.map((product) => product.id)
    await createOrder(idProducts, userData.token)
    Swal.fire({
      icon: "success",
      title: 'Orden realizada exitosamente',
      width: 400,
      padding: "3em"
    });
    setCarrito([])
    setTotal(0)
    localStorage.setItem('carrito', '[]')
    router.refresh()
    router.push("/dashboard/orders")
    router.refresh()
  }

  const handleDeleteProduct = (id: number) => {
    const updatedCarrito = carrito.filter((product) => product.id !== id); // Elimina solo el producto con el ID seleccionado
    setCarrito(updatedCarrito); // Actualiza el estado
    setTotal(updatedCarrito.reduce((acc, item) => acc + item.price, 0)); // Recalcula el total
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito)); // Guarda el carrito actualizado
  };

  return (
    <div className="flex justify-between mb-20 gap-4 mt-8">
      <div className='flex-grow'>
        <div className='space-y-4'>
          {carrito.length ?
            carrito?.map((product: IProduct) =>
              <CartProduct key={product.id} {...product} 
            onDelete={handleDeleteProduct}
            />
            ) : (
              <p>No tienes productos en tu orden de compras</p>
            )}
        </div>
      </div>

      <div className="ml-8 flex flex-col">
        <div className="bg-white rounded-md px-4 py-6 h-max shadow-lg border border-gray-400 shadow-gray-500">
          <ul className="text-gray-800 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">Subtotal $<span className="ml-auto font-bold">{total}</span></li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">Total $<span className="ml-auto">{total}</span></li>
          </ul>

          <div className="mt-8 space-y-2">
            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md border-gray-400 shadow-sm  hover:text-slate-400" onClick={handleCheckOut}>Crear orden</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CarritoView