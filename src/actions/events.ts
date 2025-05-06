'use server'

import { db } from "@/db/db";
import { eventImagesSchema, eventsSchema } from "@/db/schema";
import { sql } from "drizzle-orm";

export async function getAllEvents() {
    try {
        // const pastEvents = await db.select().from(eventsSchema).where(sql`${eventsSchema.date} <= ${new Date()}`)
        // const futureEvents = await db.select().from(eventsSchema).where(sql`${eventsSchema.date} >= ${new Date()}`)

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