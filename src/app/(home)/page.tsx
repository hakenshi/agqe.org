import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative h-[70vh] lg:h-[85vh] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight shadow-text">
            AGQE: Por Direitos e Visibilidade LGBTQIAP+
          </h1>
          <p className="text-lg lg:text-xl mb-8 font-light shadow-text">
            A Associação e Grupo Quatro Estações atua em São João da Boa Vista e região na promoção da cidadania e combate à discriminação.
          </p>
          <div className="space-x-4">
            <Link
              href="#quem_somos"
              className="bg-white text-pink-600 hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            >
              Saiba Mais
            </Link>
            <Link
              href="apoio.html"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            >
              Apoie a Causa
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent z-5"></div>
      </section>

      <section id="quem_somos" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Quem Somos Nós</h2>
          <p className="text-lg text-pink-600 mb-10">Uma identidade distinta...</p>
          <p className="max-w-3xl mx-auto text-gray-600 text-left lg:text-center leading-relaxed">
            A Associação & Grupo Quatro Estações – Brasil é uma organização da sociedade civil idealizada e criada em 2009, apartidária e sem fins
            lucrativos. Temos como base apoiar os Direitos Humanos com recorte na sexualidade humana. Iniciamos nosso trabalho de promoção e defesa
            dos direitos humanos e cidadania, em especial da comunidade LGBTQIAP+, no município de São João da Boa Vista através de parcerias com
            pessoas físicas e jurídicas. Hoje, atuamos em até 15 municípios ao redor, expandindo nosso impacto e luta por igualdade.
          </p>
        </div>
      </section>

      <section id="missao" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                width={100}
                height={100}
                src="/images/causes/c1.png"
                alt="Ícone Missão"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-3 text-pink-700">Nossa Missão</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser um catalisador de mudanças positivas, focando no apoio, capacitação e progresso da comunidade LGBTQIAP+. Atuamos na defesa e promoção da livre orientação
                sexual, identidade e expressão de gênero, e dos direitos humanos.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                width={100}
                height={100}
                src="/images/causes/c2.png"
                alt="Ícone Visão"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-3 text-purple-700">Nossa Visão</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alcançar uma sociedade com igualdade e equidade efetiva em direitos e cidadania, livre de discriminação e violência, independente da orientação
                sexual e identidade/expressão de gênero. Uma realidade possível com união, respeito e empatia.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                width={100}
                height={100}
                src="/images/causes/c3.png"
                alt="Ícone Valores"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-3 text-blue-700">Nossos Valores</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diálogo aberto, compromisso, responsabilidade, diversidade, ética, transparência, igualdade e cooperação. Atuar em diversas instâncias e parcerias pela livre
                orientação e identidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fazemos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
            <div className="w-1/3">
              <Image
                src="/images/about-img.jpg"
                alt="Ações da AGQE"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">O Que Fazemos</h2>
              <p className="text-gray-600 leading-relaxed">
                A AGQE desenvolve ações em várias frentes, como educação, saúde, cultura, segurança pública e assistência social, sempre focando no público LGBTQIAP+. Conheça
                alguns dos nossos projetos e serviços desenvolvidos junto à comunidade e descubra como ajudamos milhares de pessoas em toda a região a terem seus direitos
                garantidos e suas vozes ouvidas.
              </p>
              <Link
                href="#atividades"
                className="mt-6 inline-block bg-pink-600 text-white hover:bg-pink-700 font-semibold py-2 px-6 rounded-full transition duration-300"
              >
                Ver Atividades
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
