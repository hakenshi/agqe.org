import { buttonVariants } from "@/components/ui/button";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { apiClient } from "@/lib/api";
import { ClockIcon, Link, MapIcon, MapPinIcon, Table, UsersIcon } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    params: Promise<{ slug: string }>
}

export default async function VerProjetoPage({ params }: Props) {

    const { slug } = await params;

    const project: Project = await apiClient.get(`/projects/${slug}`);

    const statusMap = {
        planning: "Planejamento",
        active: "Ativo",
        completed: "Concluído",
        archived: "Arquivado"
    }

    const typeMap = {
        social: "Social",
        educational: "Educacional",
        environmental: "Ambiental",
        cultural: "Cultural",
        health: "Saúde"
    }

    return (
        <section >
            <div className="container mx-auto py-4 md:py-6 grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                {/* Sidebar com informações */}
            <div className="lg:col-span-4 bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex-1">
                        <p className="text-sm uppercase text-pink-600 font-semibold mb-2">
                            Projeto {typeMap[project.projectType as keyof typeof typeMap] || project.projectType}
                        </p>
                        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                                {statusMap[project.status as keyof typeof statusMap] || project.status}
                            </span>
                            {project.responsibles && (
                                <span className="flex items-center">
                                    <UsersIcon className="w-4 mr-1" />
                                    {project.responsibles}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-center w-full mb-10">
                            <Image className="rounded-lg" src={project.coverImage} width={800} height={800} alt={`foto do projeto: ${project.name}`} />
                        </div>
                        {(project.location || project.date || project.startingTime && project.endingTime) && <h3 className="font-semibold text-gray-800 mb-3">Detalhes</h3>}
                        <div className="space-y-3 text-sm">
                            {project.location && (
                                <div className="flex items-start">
                                    <MapPinIcon className="w-4 mr-2 text-pink-600 mt-0.5" />
                                    <span className="text-gray-600">{project.location}</span>
                                </div>
                            )}
                            {project.date && (
                                <div className="flex items-start">
                                    <MapIcon className="w-4 mr-2 text-pink-600 mt-0.5" />
                                    <span className="text-gray-600">
                                        {new Date(project.date).toLocaleDateString("pt-BR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                            )}
                            {project.startingTime && project.endingTime && (
                                <div className="flex items-start">
                                    <ClockIcon className="w-4 mr-2 text-pink-600 mt-0.5" />
                                    <span className="text-gray-600">
                                        {project.startingTime} - {project.endingTime}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Conteúdo principal */}
                <div className="lg:col-span-3">
                    <div className="bg-white h-full p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-gray-800">Descrição do Projeto</h3>
                        </div>
                        <article className="prose prose-sm sm:prose-base max-w-none prose-p:text-gray-700">
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
                                {project.markdown}
                            </Markdown>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}