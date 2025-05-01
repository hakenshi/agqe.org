import { MailIcon, MapPin, PhoneIcon } from "lucide-react"

export default function ContatoPage() {
    return (
        <>
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-10 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">Fale Conosco</h1>
                </div>
            </section>
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Informações de Contato</h2>

                            <div className="flex items-start space-x-4">
                                <MapPin className="text-2xl text-pink-600 mt-1 w-6 text-center" />
                                <div>
                                    <h6 className="font-semibold text-gray-700">Endereço</h6>
                                    <p className="text-gray-600 text-sm">São João da Boa Vista, SP</p>
                                    <p className="text-gray-500 text-xs">(Endereço físico não disponível publicamente)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <PhoneIcon className="text-2xl text-pink-600 mt-1 w-6 text-center" />
                                <div>
                                    <h6 className="font-semibold text-gray-700">Telefone / WhatsApp</h6>
                                    <a href="tel:+5519981333743" className="text-blue-600 hover:underline hover:text-blue-800 text-sm">(19) 98133-3743</a>
                                    <p className="text-gray-500 text-xs">Clique para ligar ou adicione no WhatsApp.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MailIcon className="text-2xl text-pink-600 mt-1 w-6 text-center" />
                                <div>
                                    <h6 className="font-semibold text-gray-700">Email</h6>
                                    <a
                                        href="mailto:contato.a.g.q.e@gmail.com?Subject=Contato%20via%20Site%20AGQE"
                                        className="text-blue-600 hover:underline hover:text-blue-800 text-sm break-all"
                                    >
                                        contato.a.g.q.e@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h6 className="font-semibold text-gray-700 mb-3">Siga-nos nas Redes</h6>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.facebook.com/associacaogrupoquatroestacoes/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook da AGQE"
                                        className="text-gray-500 hover:text-blue-700 transition duration-300"
                                    >
                                        <i className="fab fa-facebook-f text-2xl"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/agqeoficial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram da AGQE"
                                        className="text-gray-500 hover:text-pink-600 transition duration-300"
                                    >
                                        <i className="fab fa-instagram text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-gray-50 p-6 lg:p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
                            {/* <form className="space-y-5" id="contactForm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Seu nome"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 ease-in-out"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            placeholder="seu@email.com"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 ease-in-out"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        placeholder="Sobre o que você quer falar?"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 ease-in-out"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        required
                                        placeholder="Digite sua mensagem aqui..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 transition duration-150 ease-in-out resize-none"
                                    ></textarea>
                                </div>

                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300"
                                    >
                                        Enviar Mensagem
                                    </button>
                                </div>

                                <div id="form-feedback" className="mt-4 text-sm"></div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
