import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function Header() {
    return (
        <header className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
            <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
                <Link href="/" className="flex items-center space-x-2">
                    <Image width={75} height={75} src="/icons/icon-transparent.png" alt="Logo AGQE" /> <span className="h-auto font-bold text-xl hidden md:inline text-pink-600">A.G.Q.E</span>
                </Link>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300">Home</Link>
                    </li>
                    <li className="relative group">
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            Sobre <i className="fas fa-chevron-down ml-1 text-xs"></i>
                        </Link>
                        {/* <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 py-2 w-48 z-10">
                            <li><Link href="/quem_somos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Quem Somos</Link></li>
                            <li><Link href="/missao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Missão, Visão, Valores</Link></li>
                            <li><Link href="/fazemos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">O Que Fazemos</Link></li>
                            <li><Link href="/atividades" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Atividades</Link></li>
                            <li><Link href="/equipe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Nossa Equipe</Link></li>
                        </ul> */}
                    </li>
                    <li className="relative group">
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            Eventos <i className="fas fa-chevron-down ml-1 text-xs"></i>
                        </Link>
                        {/* <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 py-2 w-48 z-10">
                            <li><Link href="/proximos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Próximos Eventos</Link></li>
                            <li><Link href="/anteriores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-700">Eventos Anteriores</Link></li>
                        </ul> */}
                    </li>
                    <li>
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300">Contato</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300">Apoiadores</Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className={`${buttonVariants({ variant: 'ghost' })} border border-red-500 text-red-600 hover:text-red-600 hover:bg-red-600/20`}
                        >
                            Denuncie!
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
