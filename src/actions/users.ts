'use server'

import { db } from "@/db/db";
import { usersSchema } from "@/db/schema";

export async function getAllUsers() {
    try {
        const users = await db.select().from(usersSchema)
        return users
    } catch (error) {
        console.error("Something wrong while trying to query users table: ", error)
        return []
    }
}
