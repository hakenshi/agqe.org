export default function DenunciePage() {

    return (
        <>
            <section className="bg-[#db0000] py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider">Denuncie!</h1>
                    <p className="mt-2 text-lg md:text-xl opacity-90 font-medium">Não se cale diante da Homofobia e da Transfobia.</p>
                </div>
            </section>
            <section className="py-12 laptop:py-20 bg-white">
                <div className="container mx-auto px-4 laptop:px-6 max-w-4xl">
                    <div className="mb-10 p-6 border-l-4 border-red-500 bg-red-50">
                        <h2 className="text-2xl font-bold text-red-800 mb-3">A Homofobia e a Transfobia Matam!</h2>
                        <p className="text-gray-700 leading-relaxed mb-2">
                            Você sabia que o Brasil é um dos países mais perigosos para a comunidade LGBT+? Os números de violência e assassinatos são alarmantes e, muitas vezes,
                            subnotificados.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-semibold">
                            É fundamental denunciar <strong>todo e qualquer</strong> tipo de preconceito e discriminação, desde comentários e &quot;piadas&quot; ofensivas até agressões físicas e verbais.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">O que fazer em caso de Homofobia ou Transfobia?</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Se você foi vítima ou testemunhou um ato de Homofobia ou Transfobia, siga estes passos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                            <li>
                                <span className="font-semibold">Preserve sua segurança:</span> Se a situação apresentar risco imediato, afaste-se e procure um local seguro antes de qualquer outra ação.
                            </li>
                            <li>
                                <span className="font-semibold">Registre tudo:</span> Se for seguro, filme ou fotografe a agressão e os agressores. Anote data, hora, local e detalhes do ocorrido. Guarde nomes ou contatos de testemunhas. Em redes sociais, tire prints das postagens, comentários ou perfis.
                            </li>
                            <li>
                                <span className="font-semibold">Procure uma Delegacia de Polícia:</span> Registre um Boletim de Ocorrência (B.O.). Homofobia e Transfobia são crimes equiparados ao racismo pelo STF. Leve todas as provas que conseguiu reunir.
                            </li>
                            <li>
                                <span className="font-semibold">Utilize os Canais Oficiais de Denúncia:</span>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
                        <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                            <i className="fas fa-headset text-4xl text-blue-600 mb-3" />
                            <h4 className="font-bold text-lg mb-1">Disque 100</h4>
                            <p className="text-sm text-gray-600 mb-2">Direitos Humanos</p>
                            <a href="tel:100" className="text-blue-700 hover:underline font-semibold">Ligar 100</a>
                        </div>
                        <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                            <i className="fas fa-user-secret text-4xl text-orange-600 mb-3" />
                            <h4 className="font-bold text-lg mb-1">Disque 181</h4>
                            <p className="text-sm text-gray-600 mb-2">Disque Denúncia (SP)</p>
                            <a href="tel:181" className="text-orange-700 hover:underline font-semibold">Ligar 181</a>
                        </div>
                        <div className="p-5 border border-gray-200 rounded-lg bg-gray-50">
                            <i className="fas fa-shield-halved text-4xl text-red-600 mb-3" />
                            <h4 className="font-bold text-lg mb-1">Polícia Militar 190</h4>
                            <p className="text-sm text-gray-600 mb-2">Emergências</p>
                            <a href="tel:190" className="text-red-700 hover:underline font-semibold">Ligar 190</a>
                        </div>
                    </div>

                    <div className="mb-12 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                        <h3 className="text-xl font-bold text-purple-800 mb-3">
                            <i className="fab fa-whatsapp mr-2" />Conte com a AGQE
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Você não está sozinho(a/e). Se precisar de orientação, apoio ou quiser nos enviar provas de alguma ocorrência (prints, vídeos), entre em contato conosco pelo WhatsApp.
                        </p>
                        <p className="mb-4">
                            <a
                                href="https://wa.me/5519981333743?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%2Fdenunciar%20um%20caso%20de%20LGBTfobia."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-700 font-bold text-lg hover:underline"
                            >
                                <i className="fab fa-whatsapp" /> (19) 98133-3743
                            </a>
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Oferecemos acolhimento e encaminhamento para <span className="font-semibold">assistência jurídica e psicológica</span> parceira. Seu relato será tratado com sigilo e respeito.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Denúncia Online (Estado de SP)</h3>
                        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                            Você também pode registrar sua denúncia de discriminação por orientação sexual ou identidade de gênero diretamente no portal da Secretaria da Justiça e Cidadania de São Paulo.
                        </p>
                        <a
                            href="http://justica.sp.gov.br/index.php/contato/denuncia-online/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 text-white hover:bg-red-700 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <i className="fas fa-arrow-up-right-from-square mr-2" /> DENUNCIE JÁ ONLINE (SP)
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
