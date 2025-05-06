'use server'

import { db } from "@/db/db";
import { eventsSchema } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function getAllEvents() {
    try {
        const pastEvents = await db.query.eventsSchema.findMany({
            where: sql`${eventsSchema.date} <= ${new Date()}`,
            with: {
                images: true
            }
        })
        const futureEvents = await db.query.eventsSchema.findMany({
            where: sql`${eventsSchema.date} >= ${new Date()}`,
            with: {
                images: true
            }
        })

        return { pastEvents, futureEvents }
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

export async function getEventBySlug(slug: string) {
    try {
        return db.query.eventsSchema.findFirst({
            where: eq(eventsSchema.slug, slug),
            with: {
                images: true
            }
        })
    } catch (error) {
        console.error(error)
    }
}