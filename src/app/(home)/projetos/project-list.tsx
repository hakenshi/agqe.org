'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CardProps {
    project: Project;
}

function ProjectCard({ project }: CardProps) {
    return (
        <Card className="size-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
                <Image alt={`foto do projeto: ${project.name}`} src={project.coverImage} width={800} height={800} />
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.responsibles}</p>
                <p className="text-gray-600 mt-2">{project.status}</p>
                <div className="mt-4">
                    <a href={`/projetos/${project.slug}`} className="text-blue-500 hover:underline">
                        Ver detalhes
                    </a>
                </div>
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
                <section className="grid gap-10 grid-cols-4 place-items-center min-h-[50vh] container mx-auto px-4 md:px-6 mb-10">
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