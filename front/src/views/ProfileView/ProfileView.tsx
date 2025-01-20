import Logout from '@/components/Logout/Logout';
import { IUserSession } from '@/interfaces/types';
import { cookies } from 'next/headers';
import React from 'react'

const ProfileView = () => {

    const cookieStore = cookies();
    const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? '{}')

    return (
        <div className="flex flex-col items-center justify-center py-10 mb-36">
            <div className='mt-4 rounded-md py-2 px-6 text-gray-800'>
                <h1 className="text-xl font-semibold underline">PERFIL DEL USUARIO</h1>
            </div>
            <div className="mt-10 rounded shadow-lg border px-8 py-6 border-gray-400 shadow-gray-500'">
                <h2 className='px-4 py-2 w-full text-xl'>Nombre del usuario: {userData.user.name}</h2>
                <p className='px-4 py-2 w-full text-xl'>Dirección: {userData.user.address}</p>
                <p className='px-4 py-2 w-full text-xl'>Número de teléfono: {userData.user.phone} </p>
                <div className='flex justify-center'>
                    <Logout />
                </div>
            </div>

        </div>
    )
}

export default ProfileView