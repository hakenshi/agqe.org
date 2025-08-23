"use server";

import { apiClient } from "@/lib/api";

export async function getAllSponsors(): Promise<Sponsor[]> {
  try {
    return await apiClient.get("/sponsors");
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    throw new Error('Falha ao carregar apoiadores');
  }
}