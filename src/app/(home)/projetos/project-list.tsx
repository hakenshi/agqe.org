'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
    project: Project;
}

const statusMap = {
    planning: "Planejamento",
    active: "Ativo", 
    completed: "Concluído",
    archived: "Arquivado"
};

const typeMap = {
    social: "Social",
    educational: "Educacional",
    environmental: "Ambiental", 
    cultural: "Cultural",
    health: "Saúde"
};

function ProjectCard({ project }: CardProps) {
    return (
        <Card className="w-full h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pt-0">
            <CardHeader className="p-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                    <Image 
                        alt={`Foto do projeto: ${project.name}`}
                        src={project.coverImage || '/images/placeholder-project.jpg'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {typeMap[project.projectType as keyof typeof typeMap] || project.projectType}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' :
                            project.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                            project.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                            {statusMap[project.status as keyof typeof statusMap] || project.status}
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {project.name}
                    </h3>
                    {project.responsibles && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            <span className="font-medium">Responsáveis:</span> {project.responsibles}
                        </p>
                    )}
                    {project.location && (
                        <p className="text-sm text-gray-500 mb-3">
                            📍 {project.location}
                        </p>
                    )}
                </div>
                <a 
                    href={`/projetos/${project.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 mt-auto"
                >
                    Ver detalhes
                </a>
            </CardContent>
        </Card>
    )
}

export function ProjectsList({ projects }: { projects: Project[] }) {
    try {

        const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

        const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            const query = event.target.value.toLowerCase();
            const filtered = projects.filter(project =>
                project.name.toLowerCase().includes(query)
            );
            setFilteredProjects(filtered);
        }

        if (!projects || projects.length === 0) {
            return (
                <div className="col-span-4 text-center py-8">
                    <p className="text-gray-600">Nenhum projeto encontrado.</p>
                </div>
            );
        }

        return (
            <>
                <section className="py-8 lg:py-12">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="relative">
                            <h2 className="text-2xl font-bold mb-4">Pesquisar projetos</h2>
                            <SearchIcon className="absolute left-2 transform w-5 h-5 text-gray-500 mt-2" />
                            <Input onChange={(e) => handleSearch(e)} className="pl-10 w-full" placeholder="Casa Aradia..." />
                        </div>
                    </div>
                </section>
                <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4 md:px-6 mb-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </section>

            </>
        );
    } catch {
        throw new Error('Falha ao carregar projetos');
    }
}