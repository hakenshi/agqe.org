import EventCard from "@/components/cards/event-card";
import EventCardBody from "@/components/cards/event-card/event-car-body";
import EventCardHeader from "@/components/cards/event-card/event-card-header";
import StaffCard from "@/components/cards/staff-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="relative h-[70vh] lg:h-[85vh] bg-linear-90 from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight shadow-text">
            AGQE: Por Direitos e Visibilidade LGBT+
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Quem Somos Nós</h2>
          <p className="text-lg text-pink-600 mb-10">Uma identidade distinta...</p>
          <p className="max-w-3xl mx-auto text-gray-600 text-left lg:text-center leading-relaxed">
            A Associação & Grupo Quatro Estações – Brasil é uma organização da sociedade civil idealizada e criada em 2009, apartidária e sem fins
            lucrativos. Temos como base apoiar os Direitos Humanos com recorte na sexualidade humana. Iniciamos nosso trabalho de promoção e defesa
            dos direitos humanos e cidadania, em especial da comunidade LGBT+, no município de São João da Boa Vista através de parcerias com
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
                className="w-auto h-auto mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-3 text-pink-700">Nossa Missão</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser um catalisador de mudanças positivas, focando no apoio, capacitação e progresso da comunidade LGBT+. Atuamos na defesa e promoção da livre orientação
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

      <section className="py-16 md:py-24 bg-white">
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
                A AGQE desenvolve ações em várias frentes, como educação, saúde, cultura, segurança pública e assistência social, sempre focando no público LGBT+. Conheça
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
      <section id="atividades" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Nossas Atividades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Image
                  src="/images/features/fc1-1.jpg"
                  alt="Educação"
                  width={600}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                />
              </CardHeader>
              <CardContent>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-pink-700">Educação</h4>
                  <p className="text-gray-600 text-sm">Promovemos oportunidades através da educação, capacitando pessoas para que alcancem seu potencial e ganhem confiança.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Image
                  src="/images/features/fc2-1.jpg"
                  alt="Ações Filantrópicas"
                  width={600}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                />
              </CardHeader>
              <CardContent>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-purple-700">Ações Filantrópicas</h4>
                  <p className="text-gray-600 text-sm">
                    Levamos a filantropia a sério, trabalhando incansavelmente para causar um impacto positivo e apoiar quem mais precisa na comunidade.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Image
                  src="/images/features/fc3-1.jpg"
                  alt="Suporte e Apoio"
                  width={600}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                />
              </CardHeader>
              <CardContent>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-blue-700">Suporte e Apoio</h4>
                  <p className="text-gray-600 text-sm">Intensificamos esforços para oferecer suporte. Através da cooperação e capacitação comunitária, buscamos fazer a diferença.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 laptop:py-24 bg-white">
        <div className="container mx-auto px-4 laptop:px-6">
          <div id="proximos" className="mb-16">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-12 text-center text-gray-800">Próximos Eventos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <EventCard alt="Parada do Orgulho" src={"/images/event/e1.jpg"}>
                <EventCardHeader href="#">
                  13ª Parada do Orgulho LGBT+
                </EventCardHeader>
                <EventCardBody href="#" title="A maior manifestação pela diversidade de São João e região!" />
              </EventCard>
              <EventCard alt="Roda de Conversa" src={"/images/event/e3.jpg"}>
                <EventCardHeader href="#">
                  PROIBIDO PROIBIR: Roda de Conversa sobre HIV + Festa
                </EventCardHeader>
                <EventCardBody href="#" title="Evento especial com bate-papo informativo sobre HIV com convidados, seguido por festa com DJs da cena paulistana." />
              </EventCard>
            </div>
          </div>

          <div id="anteriores">
            <h2 className="text-3xl laptop:text-4xl font-bold mb-12 text-center text-gray-800">Eventos Anteriores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col tablet:flex-row items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/event/e1.jpg"
                  alt="Parada 12"
                  width={400}
                  height={300}
                  className="w-full tablet:w-1/3 h-48 tablet:h-full object-cover"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-700">
                    <Link href="parada12.html" target="_blank" className="hover:underline">12ª Parada do Orgulho (2020)</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Edição marcante realizada em [formato, ex: formato virtual/presencial adaptado].</p>
                  <p className="text-sm font-semibold text-gray-500 mb-4">Realizado em: 19/07/2020</p>
                  <Link href="parada12.html" target="_blank" className="mt-4 inline-block bg-gray-500 text-white text-sm py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                    Relembre
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col tablet:flex-row items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/event/e2.jpg"
                  alt="Parada 11"
                  width={400}
                  height={300}
                  className="w-full tablet:w-1/3 h-48 tablet:h-full object-cover"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-700">
                    <Link href="parada11.html" target="_blank" className="hover:underline">11ª Parada: &quot;Todos Podem ser Frida&quot; (2019)</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Celebrando a diversidade e a força inspirada em Frida Kahlo.</p>
                  <p className="text-sm font-semibold text-gray-500 mb-4">Realizado em: 21/07/2019</p>
                  <Link href="parada11.html" target="_blank" className="mt-4 inline-block bg-gray-500 text-white text-sm py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                    Relembre
                  </Link>
                </div>
              </div> */}

              <EventCard alt="Parada 12" src="/images/event/e1.jpg">
                <EventCardHeader href="parada12.html">
                  12ª Parada do Orgulho (2020)
                </EventCardHeader>
                <EventCardBody
                  href="parada12.html"
                  title="Edição marcante realizada em formato virtual/presencial adaptado."
                />
              </EventCard>
              <EventCard alt="Parada 11" src="/images/event/e2.jpg">
                <EventCardHeader href="parada11.html">
                  11ª Parada: &quot;Todos Podem ser Frida&quot; (2019)
                </EventCardHeader>
                <EventCardBody
                  href="parada11.html"
                  title="Celebrando a diversidade e a força inspirada em Frida Kahlo."
                />
              </EventCard>
            </div>
          </div>
        </div>
      </section>
      <section id="equipe" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl laptop:text-4xl font-bold mb-12 text-gray-800">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 desktop:grid-cols-5 gap-8">
            <StaffCard color="pink" staffMember={{ name: "João Pedro G. B. de Oliveira", photo: "/images/volunteer/JoaoPedro.jpg", position: "Presidente" }} />
            <StaffCard color="purple" staffMember={{ name: "Wellington Ambrozio Jacó", photo: "/images/volunteer/Wellington.jpg", position: "Vice-Presidente" }} />
            <StaffCard color="blue" staffMember={{ name: "Chrysthopher Eluís Dekay", photo: "/images/volunteer/Chrysthopher.jpg", position: "Assessor de Políticas" }} />
            <StaffCard color="teal" staffMember={{ name: "Patricia Maria M. T. Mollo", photo: "/images/volunteer/Patricia.jpg", position: "Advogada" }} />
            <StaffCard color="red" staffMember={{ name: "Alessandra Windson Francis", photo: "/images/volunteer/Alessandra.jpg", position: "Coordenadora Trans" }} />
            <StaffCard color="indigo" staffMember={{ name: "Ettore Yazbeck", photo: "/images/volunteer/Ettore.jpg", position: "Coordenador de Eventos" }} />
            <StaffCard color="yellow" staffMember={{ name: "Pedro Alves", photo: "/images/volunteer/Pedro.jpg", position: "Coordenador de Eventos" }} />
            <StaffCard color="green" staffMember={{ name: "Wellington Freitas", photo: "/images/volunteer/WellingtonF.JPG", position: "Coordenador de Eventos" }} />
            <StaffCard color="gray" staffMember={{ name: "Mitchell Willyans R.", photo: "/images/volunteer/Mitchell.jpg", position: "Assessor de Eventos" }} />
            <StaffCard color="orange" staffMember={{ name: "Lou Bruscato", photo: "/images/volunteer/Luigi..jpg", position: "Coord. Jovens/Adolesc." }} />
            <StaffCard color="cyan" staffMember={{ name: "Luís Felipe Colósimo", photo: "/images/volunteer/luisFelipe.jpg", position: "Web Designer" }} />
            <StaffCard color="lime" staffMember={{ name: "Amanda Domingues", photo: "/images/volunteer/amanda.jpg", position: "Coord. Ações/Eventos" }} />

          </div>
        </div>
      </section>
    </>
  );
}
