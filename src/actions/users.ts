"use server";

import { apiClient } from "@/lib/api";

export async function getAllUsers(): Promise<User[]> {
  try {
    return await apiClient.get("/users");
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error('Falha ao carregar usuários');
  }
}