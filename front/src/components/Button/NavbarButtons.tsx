'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IUserSession } from '@/interfaces/types'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'


const NavbarButtons: React.FC<{ userData: IUserSession }> = ({ userData }) => {

    const router = useRouter()

    const [userSession, setUserSession] = useState<IUserSession>(userData);
    const pathname = usePathname();

    useEffect(() => {
        const userCookies: IUserSession = JSON.parse(Cookies.get("userData") ?? "{}")
        setUserSession(userCookies!)
    }, [pathname])


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
        <div className="flex lg:items-center lg:flex-row ml-auto lg:justify-center gap-2 lg:gap-0">
            {
                !userSession.token ? (
                    <>
                        <Link href='/register' className="btn-secondary btn-small rounded-lg border border-gray-500 p-2 hover:text-slate-400"> Registrarse </Link>

                        <Link href='/login' className="btn-primary btn-small lg:ml-5 ml-0 rounded-lg border border-gray-500 p-2 hover:text-slate-400"> Loguearse </Link>
                    </>
                ) : (
                    <>
                        <Link href='/dashboard' className="btn-secondary btn-small rounded-lg border border-gray-500 p-2 hover:text-slate-400"> Perfil </Link>

                        <Link href='/carritoCompra' className="btn-primary btn-small lg:ml-5 ml-0 rounded-lg border border-gray-500 p-2  hover:text-slate-400"> Carrito </Link>
                        
                        <button type='submit' onClick={handleLogout} className='btn-small lg:ml-5 ml-0 rounded-lg border border-gray-500 p-2  hover:text-slate-400'>Cerrar sesión</button>
                    </>
                )
            }
        </div>
    )
}


export default NavbarButtons