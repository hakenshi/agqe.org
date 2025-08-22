'use server'

import { apiClient } from "@/lib/api";

export async function getAllSponsors() {
    try {
        return await apiClient.get('/sponsors');
    } catch (error) {
        console.error("Error fetching sponsors:", error);
        return [];
    }
}