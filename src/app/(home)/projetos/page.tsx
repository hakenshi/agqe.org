import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

interface CardProps {
  project: {
    id: string;
    name: string;
    coverImage: string;
  };
}

const projects = [
  {
    id: "1",
    name: "Project Alpha",
    coverImage: "/images/project1.jpg"
  },
  {
    id: "2", 
    name: "Project Beta",
    coverImage: "/images/project2.jpg"
  },
  {
    id: "3",
    name: "Project Gamma", 
    coverImage: "/images/project3.jpg"
  },
  {
    id: "4",
    name: "Project Delta",
    coverImage: "/images/project4.jpg"
  },
  {
    id: "5",
    name: "Project Epsilon",
    coverImage: "/images/project5.jpg"
  },
  {
    id: "6",
    name: "Project Zeta",
    coverImage: "/images/project6.jpg"
  },
  {
    id: "7",
    name: "Project Eta",
    coverImage: "/images/project7.jpg"
  },
  {
    id: "8",
    name: "Project Theta",
    coverImage: "/images/project8.jpg"
  }
];

function ProjectCard({ project }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <Image alt={`foto do projeto: ${project.name}`} src={project.coverImage} width={400} height={400} />
      </CardHeader>
    </Card>
  )
}


export default function ProjetosPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-10 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nosso Projetos</h1>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4">Pesquisar projetos</h2>
            <SearchIcon className="absolute left-2 transform w-5 h-5 text-gray-500 mt-2" />
            <Input className="pl-10 w-full" placeholder="" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 place-items-center">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}