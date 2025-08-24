import { ProjectSkeleton } from "@/components/loading/project-skeleton";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Suspense } from "react";
import { ProjectsList } from "./project-list";
import { getAllProjects } from "@/actions/projects";


function ProjectsLoading() {
  return (
    <>
      <section className="py-8 lg:py-12 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4">Pesquisar projetos</h2>
            <SearchIcon className="absolute left-2 transform w-5 h-5 text-gray-500 mt-2" />
            <Input disabled className="pl-10 w-full" placeholder="Casa Aradia..." />
          </div>
        </div>
      </section>
      <section className="grid gap-10 grid-cols-1 md:grid-cols-4 place-items-center min-h-[50vh] container mx-auto px-4 md:px-6 mb-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
      </section>
    </>
  );
}

async function ProjectsData() {
  // Add 2 second delay for testing
  const projects = await getAllProjects();
  return <ProjectsList projects={projects} />;
}

// Revalida a página a cada 60 segundos
export const revalidate = 60;

export default function ProjetosPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nosso Projetos</h1>
        </div>
      </section>
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsData />
      </Suspense>
    </>
  )
}