'use server'

import { db } from "@/db/db";
import { eventsSchema } from "@/db/schema";
import { sql } from "drizzle-orm";

type GetAllEventsReturnType = Promise<{
    pastEvents: {
        id: number;
        name: string;
        eventType: "gallery" | "event" | "event_gallery";
        slug: string;
        description: string;
        date: Date;
        location: string;
        createAt: Date;
        updatedAt: Date | null;
    }[];
    futureEvents: {
        id: number;
        name: string;
        eventType: "gallery" | "event" | "event_gallery";
        slug: string;
        description: string;
        date: Date;
        location: string;
        createAt: Date;
        updatedAt: Date | null;
    }[];
} | undefined >

export async function getAllEvents(): GetAllEventsReturnType {
    try {
        const pastEvents = await db.select().from(eventsSchema).where(sql`${eventsSchema.date} <= ${new Date()}`).orderBy(sql`desc`)
        const futureEvents = await db.select().from(eventsSchema).where(sql`${eventsSchema.date} >= ${new Date()}`).orderBy(sql`desc`)
        return { pastEvents, futureEvents }
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}