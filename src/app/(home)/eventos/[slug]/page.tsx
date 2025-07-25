import { getEventBySlug } from '@/actions/events'
import { buttonVariants } from '@/components/ui/button'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ClockIcon, MapIcon, MapPinIcon, Table } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function EventosPage({ params }: PageProps) {
    const { slug } = await params

    const event = await getEventBySlug(slug)

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                {event ? (
                    <div className="flex flex-col lg:flex-row justify-center gap-10 items-start">
                        {/* Banner e detalhes */}
                        <div className="lg:w-1/3 flex items-center flex-col justify-center">
                            <div className='inline-flex flex-col text-start justify-start w-9/12 mb-6'>
                                {(() => {
                                    const eventDate = new Date(event.date);
                                    const isPast = eventDate < new Date();
                                    return (
                                        <p className="text-xs uppercase text-pink-600 font-semibold mb-1">
                                            {isPast
                                                ? `Evento Realizado em ${eventDate.getFullYear()}`
                                                : "Próximo Evento"}
                                        </p>
                                    );
                                })()}
                                <h1 className="text-3xl lg:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                                    {event.name}
                                </h1>
                            </div>

                            <div className="flex items-center justify-center w-full h-96">
                                <Image
                                    src={event.coverImage}
                                    alt={event?.name}
                                    width={1000}
                                    height={1000}
                                    className="w-96 rounded-lg shadow-xl object-cover"
                                />
                            </div>
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
                            <article className="space-y-5 prose prose-sm sm:prose-base max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-800">
                                <Markdown
                                    skipHtml
                                    components={{
                                        code: ({ className, children, ...props }) => {
                                            const isInline = !className;
                                            if (isInline) {
                                                return (
                                                    <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                                                        {children}
                                                    </code>
                                                );
                                            }
                                            return (
                                                <code className="block bg-gray-700 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm" {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                        pre: ({ children }) => <div className="my-4">{children}</div>,
                                        h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-700 mb-4">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-700 mb-3">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-xl font-medium text-gray-700 mb-2">{children}</h3>,
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-4">
                                                {children}
                                            </blockquote>
                                        ),
                                        ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>,
                                        ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>,
                                        li: ({ children }) => <li className="text-gray-700">{children}</li>,
                                        a: ({ href, children }) => (
                                            <Link href={href || '#'} className={buttonVariants({ variant: "link" })}>
                                                {children}
                                            </Link>
                                        ),
                                        table: ({ children }) => <div className="border rounded p-2"><Table>{children}</Table></div>,
                                        tbody: ({ children }) => <TableBody>{children}</TableBody>,
                                        thead: ({ children }) => <TableHeader>{children}</TableHeader>,
                                        th: ({ children }) => <TableHead>{children}</TableHead>,
                                        tr: ({ children }) => <TableRow>{children}</TableRow>,
                                        td: ({ children }) => <TableCell>{children}</TableCell>,
                                    }}
                                    remarkPlugins={[remarkGfm]}>
                                    {event.markdown}
                                </Markdown>
                            </article>
                        </div>
                    </div>
                ) : (
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
