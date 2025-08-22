import { FacebookIcon, InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                        &copy; <span id="current-year"></span> Associação e Grupo Quatro Estações. Todos os direitos reservados. <br className="hidden md:block" /> Projeto atualizado e desenvolvido por <Link className='font-bold' href={"https://github.com/hakenshi"} target='_blank'>
                        Felipe Kafka Dias
                        </Link>.
                    </p>

                    <div className="flex space-x-5">
                        <Link
                            href="https://www.facebook.com/associacaogrupoquatroestacoes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook da AGQE"
                            className="text-gray-400 hover:text-white transition duration-300">
                            <FacebookIcon />
                        </Link>
                        <Link
                            href="https://www.instagram.com/agqeoficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da AGQE"
                            className="text-gray-400 hover:text-white transition duration-300">
                            <InstagramIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
