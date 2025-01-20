import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 dark:bg-gray-900 w-full">
                <div className="py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="#" className="flex items-center">
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-100 ml-4">MyStore</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline">Sobre MyStore</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline ">Términos &amp; Condiciones</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline">Políticas de Privacidad</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400 m-2">© 2024 <Link href="#" className="hover:underline">MyStore™</Link>. Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer; 