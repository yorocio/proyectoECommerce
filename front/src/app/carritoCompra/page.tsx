import { IUserSession } from '@/interfaces/types';
import CarritoView from '@/views/CarritoView/CarritoView'
import { cookies } from 'next/headers';
import React from 'react'

const Carrito = () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? '{}')
  return (
    <div>
      <CarritoView userData={userData} />
    </div>
  )
}

export default Carrito