import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='mb-28 flex flex-col items-center justify-center'>
            <div className=" tracking-widest mt-4 text-center">
                <span className="text-gray-800 text-6xl block mt-2 mb-2"><span>4  0  4</span></span>
                <span className="text-gray-700 text-xl">Ooops! Esta página no existe</span>
            </div>
            <div>
                <img src='https://i.pinimg.com/564x/21/36/ef/2136ef30014ba5ceffae3f4656f8f078.jpg' className='mt-2 mb-4'></img>
            </div>
            <div className="mt-6">
                <Link href="/" className="mt-4 rounded-md py-6 px-8 border border-gray-400 bg-slate-800 text-white shadow-md shadow-gray-300 hover:text-slate-400 text-center">Volver a la Página Principal</Link>
            </div>
        </div>
    )
}


