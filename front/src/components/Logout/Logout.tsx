'use client'
import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const Logout = () => {
    const router = useRouter()

    const handleLogout = () => {
        Cookies.remove('userData')
        Swal.fire({
            icon: "success",
            title: 'Cierre de sesión exitoso',
            width: 400,
            padding: "3em"
        })
        router.refresh()
        router.push("/")
        router.refresh()
    }
    return (
        <div>
            <button onClick={handleLogout} type='submit' className='mt-4 rounded-md py-2 px-6 border border-gray-400 bg-slate-800 text-white shadow-sm  hover:text-slate-400'> Cerrar Sesión </button>
        </div>
    )
}

export default Logout 