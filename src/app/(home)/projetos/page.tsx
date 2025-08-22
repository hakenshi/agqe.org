import { ProjectSkeleton } from "@/components/loading/project-skeleton";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Suspense } from "react";
import { ProjectsList } from "./project-list";
import { getAllProjects } from "@/actions/projects";


function ProjectsLoading() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </>
  );
}

export default async function ProjetosPage() {

  const projects = await getAllProjects();

  return (
    <>
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nosso Projetos</h1>
        </div>
      </section>
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsList projects={projects} />
        </Suspense>
    </>
  )
}