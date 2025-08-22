'use server'

import { apiClient } from "@/lib/api";

export async function getAllUsers() {
    try {
        return await apiClient.get('/users');
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}