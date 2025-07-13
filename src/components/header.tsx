import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { Info, Calendar, Mail, Handshake, AlertTriangle, HomeIcon } from 'lucide-react'

export default function Header() {
    return (
        <header className='bg-white shadow-md fixed md:top-0 md:left-0 w-full z-10'>
            <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
                <Link href="/" className="hidden md:flex items-center space-x-2">
                    <Image width={75} height={75} src="/icons/icon-transparent.png" alt="Logo AGQE" className='hidden md:inline' />
                    <span className="font-bold text-xl hidden md:inline text-pink-600">A.G.Q.E</span>
                </Link>
                <ul className="flex space-x-6 items-center">
                    <li className='md:hidden'>
                        <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            <HomeIcon className="w-5 h-5" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/#quem_somos" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            <span className="hidden md:inline">Sobre</span>
                            <span className="md:hidden text-lg">
                                <Info className="w-5 h-5" />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#eventos" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            <span className="hidden md:inline">Eventos</span>
                            <span className="md:hidden text-lg">
                                <Calendar className="w-5 h-5" />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            <span className="hidden md:inline">Contato</span>
                            <span className="md:hidden text-lg">
                                <Mail className="w-5 h-5" />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/apoiadores" className="text-gray-600 hover:text-pink-600 transition duration-300 flex items-center">
                            <span className="hidden md:inline">Apoiadores</span>
                            <span className="md:hidden text-lg">
                                <Handshake className="w-5 h-5" />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/denuncie"
                            className={`${buttonVariants({ variant: 'ghost' })} border border-red-500 text-red-600 hover:text-red-800 hover:bg-red-600/20 flex items-center`}
                        >
                            <span className="hidden md:inline">Denuncie!</span>
                            <span className="md:hidden text-lg">
                                <AlertTriangle className="w-5 h-5" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
