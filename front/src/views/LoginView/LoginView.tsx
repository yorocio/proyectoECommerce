'use client'
import { login } from '@/helpers/auth.helper'
import { validateLoginForm } from '@/helpers/validate'
import { ILoginErrors, ILoginProps } from '@/interfaces/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import Link from 'next/link'


const LoginView = () => {

    const router = useRouter();

    const initialState = {
        email: '',
        password: ''
    }

    const [userData, setUserData] = useState<ILoginProps>(initialState)
    const [errors, setErrors] = useState<ILoginErrors>(initialState)

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(userData);
        if (!response) return; //AGREGO ESTA LINEA
        const { token, user } = response;
        Cookies.set('userData', JSON.stringify({ token, user }), { expires: 1 }) //GUARDO EN EL LOCALSTORAGE
        Swal.fire({
            icon: "success",
            title: 'Iniciaste sesión exitosamente',
            width: 400,
            padding: "3em"
        })
        router.push('/')
    }

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
    }

    useEffect(() => {
        const errors = validateLoginForm(userData);
        setErrors(errors)
    }, [userData])

    return (
        <div className="flex flex-col items-center justify-center py-8 my-28">
            <div className='rounded shadow-lg border px-8 py-6 border-gray-400 shadow-gray-500'>
                <h1 className="text-2xl font-bold mb-4 mt-5 text-center">Iniciar Sesión</h1>
                <div className="mt-10">
                    <form onSubmit={handlerSubmit}>
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
                            <label htmlFor='password'>Contraseña: </label>
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
                        <div className='flex justify-center'>
                            <button type='submit' className='mt-4 rounded-md py-2 px-6 border border-gray-400 shadow-sm hover:text-slate-400 bg-slate-800 text-white'>Ingresar</button>
                        </div>
                        <div className='flex justify-center'>
                            <p className='py-6 px-6'>No tienes una cuenta?  
                            <Link href='/register' className='hover:text-blue-600 underline ml-2'>Regístrate</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginView