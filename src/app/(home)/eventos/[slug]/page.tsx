import { getEventBySlug } from '@/actions/events'
import { ClockIcon, MapIcon, MapPinIcon } from 'lucide-react'
import Image from 'next/image'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function EventosPage({ params }: PageProps) {
    const { slug } = await params

    const event = await getEventBySlug(slug)

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                {event ? (<div className="flex flex-col lg:flex-row justify-center gap-10 items-start">
                    {/* Banner e detalhes */}
                    <div className="lg:w-1/3 flex items-center flex-col justify-center">
                        <Image
                            src={`/${event?.images[0].imageUrl}`}
                            alt={event?.name}
                            width={1000}
                            height={1000}
                            className="w-96 rounded-lg shadow-xl"
                        />
                        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm space-y-2 w-96">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                Detalhes do Evento
                            </h3>
                            <div className="flex items-center text-gray-600">
                                <MapIcon className="w-5 mr-2 text-purple-600" />
                                {new Date(event.date).toLocaleDateString("pt-BR", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </div>
                            <div className="flex items-center text-gray-600">
                                <ClockIcon className="w-5 mr-2 text-purple-600" />
                                {new Date(event.date).toLocaleTimeString()}
                            </div>
                            <div className="flex items-center text-gray-600">
                                <MapPinIcon className="w-5 mr-2 text-purple-600" />
                                {event.location}
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo do evento */}
                    <div className="lg:w-6/12">
                        {(() => {
                            const eventDate = new Date(event.date);
                            const isPast = eventDate < new Date();
                            return (
                                <p className="text-sm uppercase text-pink-600 font-semibold mb-1">
                                    {isPast
                                        ? `Evento Realizado em ${eventDate.getFullYear()}`
                                        : "Próximo Evento"}
                                </p>
                            );
                        })()}

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                            {event.name}
                        </h1>

                        <article className="prose prose-sm sm:prose-base max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-800">
                        </article>
                    </div>
                </div>) : (
                    <div className='h-[75vh] flex items-center justify-center'>
                        <h2 className=''>
                            Evento não encontrado
                        </h2>
                    </div>
                )}
            </div>
        </section>
    )
}
