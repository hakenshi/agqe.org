import { getAllEvents } from "@/actions/events";
import { getAllUsers } from "@/actions/users";
import EventCard from "@/components/cards/event-card";
import EventCardBody from "@/components/cards/event-card/event-card-body";
import EventCardHeader from "@/components/cards/event-card/event-card-header";
import StaffCard from "@/components/cards/staff-card";
import { UserSkeleton } from "@/components/loading/user-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function EventsList() {
  const events = await getAllEvents();
  
  return (
    <>
      {events?.futureEvents && events?.futureEvents.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-800">Próximos Eventos</h2>
          <div className={`grid grid-cols-1 ${events?.futureEvents && events?.futureEvents.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-8`}>
            {events?.futureEvents.map(event => (
              <EventCard key={event.id} alt={event.name} src={event.coverImage}>
                <EventCardHeader href={event.eventType === "event" || event.eventType === "event_gallery" ? `/eventos/${event.slug}` : `/eventos/${event.slug}/galeria`}>
                  {event.name}
                </EventCardHeader>
                <EventCardBody href={event.eventType === "event" || event.eventType === "event_gallery" ? `/eventos/${event.slug}` : `/eventos/${event.slug}/galeria`} title={event.name} />
              </EventCard>
            ))}
          </div>
        </div>
      )}
      <div className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-800">Eventos Anteriores</h2>
        <div className={`grid grid-cols-1 ${events?.pastEvents && events?.pastEvents.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-8`}>
          {events?.pastEvents && events?.pastEvents.length > 0 ? events?.pastEvents.map(event => (
            <EventCard key={event.id} alt={event.name} src={event.coverImage}>
              <EventCardHeader href={event.eventType === "event" || event.eventType === "event_gallery" ? `/eventos/${event.slug}` : `/eventos/${event.slug}/galeria`}>
                {event.name}
              </EventCardHeader>
              <EventCardBody href={event.eventType === "event" || event.eventType === "event_gallery" ? `/eventos/${event.slug}` : `/eventos/${event.slug}/galeria`} title={event.name} />
            </EventCard>
          )) : (
            <p className="text-center">Ainda não há eventos anteriores.</p>
          )}
        </div>
      </div>
    </>
  );
}

function EventsLoading() {
  return (
    <div className="mb-16">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Skeleton className="w-full h-48" />
            <div className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function TeamList() {
  const users = await getAllUsers();
  
  return (
    <>
      {users.map(user => (
        <StaffCard color={"pink"} staffMember={user} key={user.id} />
      ))}
    </>
  );
}

function TeamLoading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <UserSkeleton key={i} />
      ))}
    </>
  );
}

// Revalida a página a cada 60 segundos
export const revalidate = 60;

export default function Home() {

  return (
    <>
      <section
        id="hero"
        className="relative h-[70vh] md:h-[85vh] bg-linear-90 from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white text-center px-4 overflow-hidden">
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
              href="/apoiadores"
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
                className="size-20 mx-auto mb-4"
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

      <section id="oque_fazemos" className="py-16 md:py-24 bg-white">
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

      <section id="eventos" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <Suspense fallback={<EventsLoading />}>
            <EventsList />
          </Suspense>
        </div>
      </section>
      <section id="equipe" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
            <Suspense fallback={<TeamLoading />}>
              <TeamList />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
