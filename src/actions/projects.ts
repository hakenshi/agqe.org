'use server'

import { apiClient } from "@/lib/api";

export async function getAllProjects(): Promise<Project[]> {
    try {
        const projects = await apiClient.get<Project[]>('/projects');
        return projects.map((project: Project) => ({
            ...project,
            coverImage: project.coverImage || "/default-project-cover.png"
        }));
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw new Error('Falha ao carregar projetos');
    }
}