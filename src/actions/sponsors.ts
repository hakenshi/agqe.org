'use server'

import { apiClient } from "@/lib/api";
import { getFileURL } from "@/lib/utils";

export async function getAllSponsors() {
    try {
        const sponsors = await apiClient.get<Sponsor[]>('/sponsors');
        return sponsors.map((sponsor: Sponsor) => ({
            ...sponsor,
            logo: getFileURL(sponsor.logo) || "/default-logo.png"
        }));
    } catch (error) {
        console.error("Error fetching sponsors:", error);
        return [];
    }
}