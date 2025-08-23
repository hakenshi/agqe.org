"use server";

import { apiClient } from "@/lib/api";
import { getFileURL } from "@/lib/utils";

export async function getAllEvents(): Promise<{
  pastEvents: Event[];
  futureEvents: Event[];
}> {
  try {
    const events: Event[] = await apiClient.get("/events");

    return {
      pastEvents: events.filter(
        (event: Event) => new Date(event.date) < new Date()
      ).map((event: Event) => ({
        ...event,
        coverImage: getFileURL(event.coverImage) || "/default-event-cover.png"
      })),
      futureEvents: events.filter(
        (event: Event) => new Date(event.date) >= new Date()
      ).map((event: Event) => ({
        ...event,
        coverImage: getFileURL(event.coverImage) || "/default-event-cover.png"
      })),
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error('Falha ao carregar eventos');
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const event: Event = await apiClient.get(`/events/slug/${slug}`);
    if (event) {
      return {
        ...event,
        coverImage: getFileURL(event.coverImage) || "/default-event-cover.png"
      };
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Error('Evento não encontrado');
  }
}
