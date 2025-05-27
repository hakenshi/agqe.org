'use server'

import { db } from "@/db/db"
import { sponsorsSchema } from "@/db/schema"

export async function getAllSponsors() {
    try {
        const sponsors = await db.select().from(sponsorsSchema)
        return sponsors
    } catch (error) {
        console.error("Something wrong while trying to query sponsors table: ", error)
        return []
    }
}