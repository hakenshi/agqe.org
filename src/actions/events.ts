'use server'

import { apiClient } from "@/lib/api";

export async function getAllEvents() {
    try {
        return await apiClient.get('/events');
    } catch (error) {
        console.error("Error fetching events:", error);
        return { pastEvents: [], futureEvents: [] };
    }
}

export async function getEventBySlug(slug: string) {
    try {
        return await apiClient.get(`/events/slug/${slug}`);
    } catch (error) {
        console.error(error);
        return null;
    }
}