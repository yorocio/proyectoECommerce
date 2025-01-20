import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import NavbarButtons from '../Button/NavbarButtons';

const Navbar = () => {

    const cookieStore = cookies();
    const userData = JSON.parse(cookieStore.get('userData')?.value ?? "{}")

    return (
        <nav className="mx-auto w-full border bg-white/80 border-gray-900 shadow-gray-600 py-3 shadow-md backdrop-blur-lg">
            <div className="px-4 ">
                <div className="flex items-center justify-between flex-row">
                    <div className=" flex shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="https://www.imprentaonline.net/blog/wp-content/uploads/logo-apple.png" className='h-10 w-auto' />
                        </Link>
                    </div>
                    <div className="flex lg:items-center lg:flex-row flex-row ml-auto lg:justify-center gap-2 lg:gap-0">
                    </div>

                    <NavbarButtons userData={userData} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

