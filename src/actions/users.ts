'use server'

import { apiClient } from "@/lib/api";
import { getFileURL } from "@/lib/utils";

export async function getAllUsers(): Promise<User[]> {
    try {
        const users: User[] = await apiClient.get('/users');
        return users.map(user => ({
            ...user,
            photo: getFileURL(user.photo) || "/default-avatar.png"
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}