import ContactForm from "@/components/forms/contact-form"
import { FacebookIcon, InstagramIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react"

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
                                <MapPin className="text-2xl text-pink-600 mt-4 w-6 text-center" />
                                <div>
                                    <h6 className="font-semibold text-gray-700">Endereço</h6>
                                    <p className="text-gray-600 text-sm">São João da Boa Vista, SP</p>
                                    <p className="text-gray-500 text-xs">(Endereço físico não disponível publicamente)</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <PhoneIcon className="text-2xl text-pink-600 mt-4 w-6 text-center" />
                                <div>
                                    <h6 className="font-semibold text-gray-700">Telefone / WhatsApp</h6>
                                    <a href="tel:+5519981333743" className="text-blue-600 hover:underline hover:text-blue-800 text-sm">(19) 98133-3743</a>
                                    <p className="text-gray-500 text-xs">Clique para ligar ou adicione no WhatsApp.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MailIcon className="text-2xl text-pink-600 mt-4 w-6 text-c2enter" />
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
                                        <FacebookIcon />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/agqeoficial/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram da AGQE"
                                        className="text-gray-500 hover:text-pink-600 transition duration-300"
                                    >
                                        <InstagramIcon />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-gray-50 p-6 lg:p-8 rounded-lg shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
