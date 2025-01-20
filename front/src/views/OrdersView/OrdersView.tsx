import { getOrders } from '@/helpers/orders.helper';
import { IOrder, IUserSession } from '@/interfaces/types';
import { cookies } from 'next/headers';
import React from 'react'

const OrdersView = async () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? '{}')

  if(!userData){
    return <div>Por favor inicia sesión para ver tus órdenes</div>
  }

  if(typeof userData.token !== 'string'){
    return <div>Token inválido. Por favor inicia sesión</div>
  }

  const orders: IOrder[] = await getOrders(userData.token);
  
  return (
    <div className='flex flex-col items-center justify-center mt-2 mb-36'>
      <div className='mt-2 rounded-md py-2 px-6 text-gray-800 mb-4 text-center'>
        <h1 className="text-xl font-semibold">Órdenes de Compras</h1>
      </div>
      <div className="w-full max-w-2xl">
        {
          orders && orders.map((order) => {
            return (
              <div key={order.id} className="flex justify-between items-center bg-white p-4 mb-4 rounded-md shadow shadow-slate-400">
                
                <div className="flex flex-col items-start mr-28">
                  <span className="text-lg font-bold text-gray-700">Fecha: </span>
                  <span className="text-sm text-gray-800">{new Date(order.date)?.toLocaleString()}</span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-gray-700">Status: </span>
                  <span className="text-sm border border-green-700 text-gray-800 px-2 py-1 rounded-md bg-green-600">{order.status.toLocaleUpperCase()}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default OrdersView;