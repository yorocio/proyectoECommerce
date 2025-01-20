import Link from 'next/link'
import React from 'react'

//LAYOUT DEL DASHBOARD 
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className='mt-2'>
              {/* <Link href="/dashboard">Perfil</Link> */}
                <Link href="/dashboard/orders"  className='mt-2 rounded-md py-2 px-6 border border-gray-400 bg-slate-800 text-white shadow-sm  hover:text-slate-400'>Órdenes</Link> 
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}