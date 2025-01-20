'use client'
import { register } from '@/helpers/auth.helper'
import { validateRegisterForm } from '@/helpers/validate'
import { IRegisterErrors, IRegisterProps } from '@/interfaces/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const RegisterView = () => {
    const router = useRouter();

    const initialState = {
        name: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    }

    const [userData, setUserData] = useState<IRegisterProps>(initialState)
    const [errors, setErrors] = useState<IRegisterErrors>(initialState)

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
    }

    useEffect(() => {
        const errors = validateRegisterForm(userData);
        setErrors(errors)
    }, [userData])


    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await register(userData);
        Swal.fire({
            icon: "success",
            title: 'Te registraste exitosamente',
            width: 400,
            padding: "3em"
        })
        router.push('/login')
    }

return (
    <div className="flex flex-col items-center justify-center py-8 my-14">
        <div className='rounded shadow-lg border px-8 py-6 border-gray-400 shadow-gray-500'>
            <h1 className="text-2xl font-bold mb-4 mt-5 text-center">Crear una cuenta - Registrate </h1>

            <div className="mt-10">
                <form onSubmit={handlerSubmit}>
                    <div className='px-4 py-2 w-full'>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            value={userData.name}
                            type='text'
                            name='name'
                            placeholder='Tu nombre de usuario'
                            onChange={handlerChange}
                            required
                            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                        />
                        {errors.name && <span className='text-red-500'>{errors.name}</span>}
                    </div>

                    <div className='px-4 py-2 w-full'>
                        <label htmlFor='email'>Email: </label>
                        <input
                            id='email'
                            value={userData.email}
                            type='email'
                            name='email'
                            placeholder='nombre@ejemplo.com'
                            onChange={handlerChange}
                            required
                            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                        />
                        {errors.email && <span className='text-red-500'>{errors.email}</span>}
                    </div>

                    <div className='px-4 py-2 w-full'>
                        <label htmlFor='password_address'>Contraseña: </label>
                        <input
                            id='password'
                            value={userData.password}
                            type='password'
                            name='password'
                            placeholder='********'
                            onChange={handlerChange}
                            required
                            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                        />
                        {errors.password && <span className='text-red-500'>{errors.password}</span>}
                    </div>

                    <div className='px-4 py-2 w-full'>
                        <label htmlFor='address'>Dirección: </label>
                        <input
                            id='address'
                            value={userData.address}
                            type='text'
                            name='address'
                            placeholder='Provincia, País'
                            onChange={handlerChange}
                            required
                            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                        />
                        {errors.address && <span className='text-red-500'>{errors.address}</span>}
                    </div>

                    <div className='px-4 py-2 w-full'>
                        <label htmlFor='phone'>Número de Teléfono: </label>
                        <input
                            id='phone'
                            value={userData.phone}
                            type='text'
                            name='phone'
                            placeholder='Tu número de teléfono'
                            onChange={handlerChange}
                            required
                            className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                        />
                        {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='mt-4 rounded-md py-2 px-6 border border-gray-400 bg-slate-800 text-white shadow-sm  hover:text-slate-400'>Registrarme</button>
                    </div>
                    <div className='flex justify-center'>
                            <p className='py-6 px-6'>Ya tienes una cuenta?  
                            <Link href='/login' className='hover:text-blue-600 underline ml-2'>Iniciar Sesión</Link>
                            </p>
                        </div>
                </form>
            </div>
        </div>

    </div>
)
}

export default RegisterView